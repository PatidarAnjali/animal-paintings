# Animal Paintings

Animal Paintings is an Angular web app that displays a collection of animal-themed paintings. Users can browse, search, and sort through paintings dynamically. The application interacts with a backend API to fetch painting data and display images.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Features

- Display a collection of animal paintings with images, names, and prices
- Search paintings by name
- Sort paintings by price (low → high / high → low)
- Responsive design with Angular Material and Flex Layout
- Dynamic integration with backend API

### Technology Stack
- Frontend:
  - Angular 18
  - Angular Material
  - Flex Layout
- Backend (optional / mock):
  - Node.js + Express
  - Serves product data and images
- Other:
  - CORS enabled for frontend-backend communication
 
### Project Structure
```
animal-paintings/
│
├─ backend/             # Node.js backend serving API and images
│  ├─ images/           # Painting images
│  ├─ index.js
│  └─ package.json
│
├─ src/                 # Angular frontend source code
│  ├─ app/
│  ├─ assets/
│  └─ environments/
│
└─ package.json         # Frontend dependencies and scripts
```

### Screenshots
<img width="3024" height="1416" alt="image" src="https://github.com/user-attachments/assets/71750492-4f05-4e56-8511-88d447f0ba15" />
<img width="1868" height="772" alt="image" src="https://github.com/user-attachments/assets/82262f04-7a81-4cf6-8a68-27d685552e4c" />


### References
- [Angular CLI Documentation](https://angular.dev/cli)
- [Angular Material](https://material.angular.dev/)
- [Flex Layout](https://github.com/angular/flex-layout)
