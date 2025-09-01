using Microsoft.AspNetCore.Mvc;
using dotnet_technical_evaluation.Data;
using dotnet_technical_evaluation.Models;

namespace dotnet_technical_evaluation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PolicyController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PolicyController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/policy
        [HttpGet]
        public IActionResult GetPolicies()
        {
            var policies = _context.Policies.ToList();
            return Ok(policies);
        }

        // POST: api/policy
        [HttpPost]
        public IActionResult CreatePolicy([FromBody] Policy policy)
        {
            // Business logic: calculate final premium
            policy.FinalPremium = policy.BasePremium + (policy.RiskFactor * policy.Age);

            _context.Policies.Add(policy);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetPolicies), new { id = policy.Id }, policy);
        }
    }
}
