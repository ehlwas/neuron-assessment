using dotnet_technical_evaluation.Data;
using dotnet_technical_evaluation.Models;
using Microsoft.AspNetCore.Mvc;

namespace dotnet_technical_evaluation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TodoController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetTodos()
        {
            return Ok(_context.Todos.ToList());
        }

        [HttpPost]
        public IActionResult Create(Todo todo)
        {
            _context.Todos.Add(todo);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetTodos), new { id = todo.Id }, todo);
        }
    }
}
