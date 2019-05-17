import React from "react";
import { render } from "react-dom";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(i);
    }
    return arr;
  };
  
  
  let ingredientes = ['pao','ketchup','milho','batata palha','salsicha','bacon']
  let contador = 0;
class TelaDeResultados extends React.Component {
    constructor() {
        super();
        this.state = {
          data: ingredientes
        };
      }
      coluna = () =>{
          if(contador===0){
            return "pao";
          }
          
          if(contador===1){
              return "ketchup"
        }
        
        if(contador===2){
              return "milho"
        }
        
        if(contador===3){
              return "salsicha"
        }
        
        if(contador===4){
              return "batata palha"
        }
        
        if(contador===5){
              return "bacon"
        }
        contador++;
      }
      render() {
          const {data} = this.state;
        return (
          <div>
            <ReactTable
                data={data}
              columns={[
                {
                  columns: [
                    {
                        Header: "Ingredientes",
                        accessor: "status",
                        Cell: row =>ingredientes[Math.floor(Math.random() * ingredientes.length)]
                    },
                    {
                      Header: "Quantidade a ser comprada",
                      accessor: "status",
                      Cell: row => <span>{Math.floor(Math.random() * 30)}</span>
                    },
                  ]
                }
              ]}
              defaultPageSize={10}
              className="-striped -highlight"
            />
            <br />
          </div>
        );
      }
    }

export default(TelaDeResultados)