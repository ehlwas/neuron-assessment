# Ram Kenneth Tadong Assessment

# Insurance Premium Calculator API (.Net Web Core API)

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



# React + TypeScript

## Packages Used
- sass
- react-router-dom

---

## Database Used
- localStorage

---

## Logic Used
- Context API (same approach as React RTK style)

---

## Run the project
- npm install
- npm run dev
- open on http://localhost:5173

---

