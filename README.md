# SqlWebApi-HtmlDataManager
Simple data manager application leveraging HTML on top of ASP .NET WebApi and SQL Server database, developed with Visual Studio and as little code as possible.

## Development steps
* Screenshots available in Development-steps folder

### Get started
 1. Initiate creation of a new Visual Studio project of type ASP .NET Web Application
 2. Start with Empty template and Web API folders and core references
 3. Open Solution Explorer in Visual Studio to see and manage the source code files

### Create an organization database including employee and department data
 4. Add new SQL Server Database in App_Data folder from Solution Explorer
 5. Set MyOrganization as the database name
 6. Add a new table to the new database from Server Explorer
 7. Set Departments table name in the T-SQL script, add columns, and set Id column (primary key) as identity column
 8. Add another Employees table
 9. Initiate adding of a new foreign key to Employees table
10. Set Employees.DepartmentId column as foreign key to Departments.Id column
11. Show table data for Departments and Employees tables from Server Explorer
12. Enter some test data for Departments table
13. Enter some test data for Employees table, using DepartmentId values from actually created department rows; DepartmentId is nullable indicating that department relationship is optional for employees

### Create data model for the organization database
14. Add new ADO .NET Entity Data Model in Models folder from Solution Explorer
15. Set MyOrganizationModel as the Entity Framework data model name
16. Use EF Designer from database as the database already exists
17. Save connection string to Web.config
18. Select Entity Framework version
19. Select database tables that you want to create data model objects for
20. View the data model and relations between entities

### Create WebApi controllers using the existing data model classes
21. Build the Visual Studio project (or solution)
22. Initiate adding of a new controller in Controllers folder from Server Explorer
23. Select Web API 2 Controller with actions, using Entity Framework
24. Select MyOrganizationEntities as data context class and then Employee as model class to generate controller for
25. View EmployeesController code

### Prepare for client side development
26. Enter Nuget package manager to add framework to help with client side Development
27. Use Browse to search for, then select and install AngularJS.Core package

### Create client side to display employee data from the database
28. Initiate adding of a new HTML Page in the project folder from Server Explorer
29. Set index as the page name
30. Write HTML code with a list item to display employee information as a template definition
31. Run the app to see the template itself without actual employee values
32. Initiate adding of a new JavaScript code file in Scripts folder from Server Explorer
33. Set app as the JavaScript file name
34. Write an Angular module with a controller that loads actual employee values using HTTP from WebApi using /api/ControllerName URL
35. Update HTML code to load the Angular script, app.js script, and initialize the Angular app module and controller, then repeat generating list items for each employee
36. Run the app again and use browser developer tools (F12) to notice a circular reference serialization error on the server side
37. To resolve the issue caused by employee data linked to department that is linked back to employee data go to Entity Framework data model and select False for its Lazy Loading Enabled property
38. Run the app again and see base employee data is loaded successfully; note, though, that department data is not available (since related department data for employees hasn't been loaded anymore)
39. To resolve the issue you may use a separate data transfer object (DTO) as model; initiate adding a new class in Model folder from Server Explorer
40. Write very simple code to define EmployeeDto class and its properties, mapping to fields to be displayed on the client side, including DepartmentName
41. Update EmployeesController code to return EmployeeDto objects instead of Employee entities for the GET verb
42. Update HTML code to use DepartmentName field of the employee DTO
43. Run the app again and see full employee data is loaded and displayed correctly, including department names; some employees may not have a department

### Update client side to add new employee data to the database
44. Update HTML code with input elements to support new employee field entering, and an Add button linked to a new addNewEmployee function to be defined in JavaScript code
45. Run the app to see the New employee form visuals
46. Update JavaScript code to support editing fields for and adding a new employee, and reinitializing the employee list afterwards
47. Run the app again and click Add button
48. See the new employee created and his or her information displayed in the list of employees