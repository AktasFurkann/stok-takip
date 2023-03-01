import * as React from 'react';
import BasicCard from '../../components/Card';
import { Button, Grid } from '@mui/material';
import { UseStokAuth } from '../../context/stokContext';



// function preventDefault(event) {
//   event.preventDefault();
// }

export default function Stok() {
  const {stok} = UseStokAuth();
  console.log(stok);

  
  

  return (
    <>
    <div >
    <Button href='/malzeme' variant="outlined">Stok ekle</Button>
      {/* <Input placeholder='Arama Çubuğu' value={filterData} onChange={(e) => setFilterData(e.target.value)} width='auto' borderColor="darkblue" /> */}

    </div>
      
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
        {stok.map((items, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <BasicCard item={items} />
          </Grid>
        ))}
      </Grid>


    </>

  );
}
// const [filterData, setFilterData] = useState('');
  // console.log(filterData);

  // const filtered = rows.filter((item) => {
  //   return Object.keys(item).some((key) =>
  //     item[key]
  //       .toString()
  //       .toLowerCase()
  //       .includes(filterData.toLocaleLowerCase())
  //   )
  // })