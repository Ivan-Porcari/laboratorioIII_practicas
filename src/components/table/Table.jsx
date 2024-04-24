import PropTypes from 'prop-types';




const Table = ({netIncomes}) => {
  const totalIncome = netIncomes.reduce((acumulador, indice) => acumulador + indice.income, 0);
  const promedioIncome = totalIncome / netIncomes.length;

  return (
    <div>
      <p>El promedio total es: {promedioIncome.toFixed(2)}</p>
    </div>
  );
};

Table.propTypes = {
  netIncomes: PropTypes.array.isRequired
};

export default Table