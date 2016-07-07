# SqlWebApi-HtmlDataManager
Simple data manager application leveraging HTML on top of ASP .NET WebApi and SQL Server database, developed with Visual Studio and as little code as possible.

## Development steps
### Get started
1. Initiate creation of a new Visual Studio project of type ASP .NET Web Application
![1](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/1.png)

2. Start with Empty template and Web API folders and core references
![2](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/2.png)

3. Open Solution Explorer in Visual Studio to see and manage the source code files
![3](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/3.png)

### Create an organization database including employee and department data
4. Add new SQL Server Database in App_Data folder from Solution Explorer
![4](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/4.png)

5. Set MyOrganization as the database name
![5](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/5.png)

6. Add a new table to the new database from Server Explorer
![6](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/6.png)

7. Set Departments table name in the T-SQL script, add columns, and set Id column (primary key) as identity column
![7](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/7.png)

8. Add another Employees table
![8](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/8.png)

9. Initiate adding of a new foreign key to Employees table to create a relation between employees and departments
![9](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/9.png)

10. Set Employees.DepartmentId column as foreign key to Departments.Id column
![10](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/10.png)

11. Show table data for Departments and Employees tables from Server Explorer
![11](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/11.png)

12. Enter some test data for Departments table
![12](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/12.png)

13. Enter some test data for Employees table, using DepartmentId values from actually created department rows; DepartmentId is nullable indicating that department relationship is optional for employees
![13](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/13.png)

### Create data model for the organization database (mapping database tables to middle code data entity objects)
14. Add new ADO .NET Entity Data Model in Models folder from Solution Explorer
![14](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/14.png)

15. Set MyOrganizationModel as the Entity Framework data model name
![15](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/15.png)

16. Use EF Designer from database as the database already exists
![16](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/16.png)

17. Save connection string to Web.config
![17](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/17.png)

18. Select Entity Framework version
![18](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/18.png)

19. Select database tables that you want to create data model objects for
![19](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/19.png)

20. View the data model and relations between entities
![20](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/20.png)

### Create WebApi controllers using the existing data model classes to expose get and update actions for your data entities (and eventually database) on HTTP as /api/* URLs
21. Build the Visual Studio project to ensure data model is compiled
22. Initiate adding of a new controller in Controllers folder from Server Explorer
![22](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/22.png)

23. Select Web API 2 Controller with actions, using Entity Framework
![23](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/23.png)

24. Select MyOrganizationEntities as data context class and then Employee as model class to generate controller for
![24](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/24.png)

25. View EmployeesController code
![25](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/25.png)

### Prepare for client side development
26. Open Nuget package manager to add frameworks to help with client side Development
![26](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/26.png)

27. Use Browse to search for, then select and install AngularJS.Core package (or another client side framework package that you would like to use)
![27](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/27.png)

### Create client side app to display employee data from the database
28. Initiate adding of a new HTML Page in the project folder from Server Explorer
![28](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/28.png)

29. Set index as the page name
![29](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/29.png)

30. Write HTML code with a list item to display employee information as a template definition
![30](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/30.png)

31. Run the app to see the template itself without actual employee values
![31](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/31.png)

32. Initiate adding of a new JavaScript code file in Scripts folder from Server Explorer
![32](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/32.png)

33. Set app as the JavaScript file name
![33](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/33.png)

34. Write an Angular module with a controller that loads actual employee values using HTTP from WebApi using /api/ControllerName URL
![34](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/34.png)

35. Update HTML code to load the Angular script, app.js script, and initialize the Angular app module and controller, then repeat generating list items for each employee
![35](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/35.png)

36. Run the app again and use browser developer tools (F12) to notice a circular reference serialization error on the server side

37. To resolve the issue caused by employee data linked to department that is linked back to employee data go to Entity Framework data model and select False for its Lazy Loading Enabled property
![37](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/37.png)

38. Run the app again and see base employee data is loaded successfully; note, though, that department data is not available (since related department data for employees hasn't been loaded anymore)
![38](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/38.png)

39. To resolve the issue you may use a separate data transfer object (DTO) as model; initiate adding a new class in Models folder from Server Explorer
![39](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/39.png)

40. Write very simple code to define EmployeeDto class and its properties, mapping to fields to be displayed on the client side, including DepartmentName
![40](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/40.png)

41. Update EmployeesController code to return EmployeeDto objects instead of Employee entities for the GET verb
![41](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/41.png)

42. Update HTML code to use DepartmentName field of the employee DTO
![42](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/42.png)

43. Run the app again and see full employee data is loaded and displayed correctly, including department names; some employees may not have a department
![43](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/43.png)

### Update client side app to be able to add new employee records to the database
44. Update HTML code with input elements to support new employee field entering, and an Add button linked to a new addNewEmployee function to be defined in JavaScript code
![44](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/44.png)

45. Run the app to see the New employee form visuals
![45](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/45.png)

46. Update JavaScript code to support editing fields for and adding a new employee, and reinitializing the employee list afterwards
![46](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/46.png)

47. Run the app again and click Add button
![47](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/47.png)

48. See the new employee created and his or her information displayed in the list of employees
![48](https://raw.githubusercontent.com/SDolha/SqlWebApi-HtmlDataManger/master/Development-screenshots/48.png)
