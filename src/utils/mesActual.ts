  export const getMesActual = () => {
    const hoy = new Date();

    const inicio = new Date(hoy.getFullYear(), hoy.getMonth(), 1);
    const fin = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0);

    const formatInputDate = (date: Date) => {
      return date.toISOString().split("T")[0];
    };

    return {
      fechaInicio: formatInputDate(inicio),
      fechaFin: formatInputDate(fin),
    };
  };