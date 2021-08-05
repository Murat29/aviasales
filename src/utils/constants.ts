interface Icheckbox {
    name: string;
    title: string;
  }
  
export  const checkboxesData: Array<Icheckbox> = [
    {
      name: 'all',
      title: 'Все',
    },
    {
      name: 'direct',
      title: 'Без пересадок',
    },
    {
      name: 'one transplant',
      title: '1 пересадка',
    },
    {
      name: 'two transplants',
      title: '2 пересадка',
    },
    {
      name: 'three transplants',
      title: '3 пересадка',
    },
  ];