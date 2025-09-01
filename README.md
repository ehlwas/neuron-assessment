# Insurance Premium Calculator API

## Packages Used
- Microsoft.EntityFrameworkCore
- Microsoft.EntityFrameworkCore.Sqlite
- Microsoft.EntityFrameworkCore.Design
- Microsoft.EntityFrameworkCore.Tools
- xUnit
- FluentAssertions

---

## Apply migrations
- dotnet ef migrations add InitialCreate
- dotnet ef database update
- run on http

---

## Example endpoints

POST /api/policies
Content-Type: application/json

{
  "customerName": "John Doe",
  "age": 30,
  "basePremium": 1000,
  "riskFactor": 20
}

GET /api/policies
GET /api/policies




