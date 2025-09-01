namespace dotnet_technical_evaluation.Models
{
    public class Policy
    {
        public int Id { get; set; }
        public string? CustomerName { get; set; }
        public int Age { get; set; }
        public decimal BasePremium { get; set; }
        public decimal RiskFactor { get; set; }
        public decimal FinalPremium { get; set; }
    }
}
