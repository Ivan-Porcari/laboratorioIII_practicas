// Resolver el siguiente ejercicio:
// En el componente App.js poseo el siguiente arreglo de ingresos brutos por compañia:
// const netIncomes = [{brand: ´McDonalds´, income: 1291283}, {brand: Burger King, income: 1927361}, {brand: ‘KFC’, income: 1098463}];
// En el componente App:
// Escribir un componente Table.js que arme una tabla de HTML donde las columnas sean el nombre de la marca y el ingreso neto.
// Escribir una etiqueta p que muestre el promedio de ingreso neto entre todas las marcas. Utilizar obligatoriamente 
// la función reduce para calcular el promedio.
// La entrega debe ser del repositorio de github en donde se encuentran todas las prácticas individuales de la cátedra.

import DataTable from 'react-data-table-component';
import Table from './components/table/Table';


function App() {

  const netIncomes = [
    {brand: "McDonalds", income: 1291283}, 
    {brand: "Burger King", income: 1927361}, 
    {brand: "KFC", income: 1098463},
    {brand: "Mostaza", income: 1478973}
  ];
  const columns = [
    {
      name: "Empresa",
      selector: row => row.brand,
      sortable: true,
    },
    {
      name: "Ingreso",
      selector: row => row.income,
      sortable: true,
    },
  ]

  return (
    
      <div className="container">        
        <DataTable
          title = "Tabla de ingresos"
          columns= {columns}
          data = {netIncomes}
          highlightOnHover
        />
        <Table netIncomes={netIncomes}/>{Table}
      </div>
    
  );
}

export default App
