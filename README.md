# Calculator
The application has a user interface that allows users to input two numbers and select an operation. it also stores the the history of calculations and allow users to view their past calculations.

Installation
clone the project

# Backend

Update the "DefaultConnection" in appsettings.Development.json to localdb
"Server=.;Database=calculator;Trusted_Connection=True;MultipleActiveResultSets=true"

cd Calculator.client
dotnet restore
dotnet run

if you are opening with visual studio, just build and run the project.

# Frontend
cd Calculator.client
npm install
npm start




