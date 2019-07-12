import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavBarComponent from "../NavbarComponent/NavBarComponent";

class RetirarColacion extends Component {
  state = {
    data: [
      {
        id: 1,
        FechaPedido: Date.now(),
        Nombre: "Tony Krikorian",
        rut: "25.951.215-8",
        isMarcacionRealiada: 1,
        isColacionEntregada: 0
      },
      {
        id: 2,
        FechaPedido: Date.now(),
        Nombre: "Fabian Gonzalez",
        rut: "13.951.215-8",
        isMarcacionRealiada: 1,
        isColacionEntregada: 1
      },
      {
        id: 3,
        FechaPedido: Date.now(),
        Nombre: "Alejandro Alarcon",
        rut: "17.951.215-8",
        isMarcacionRealiada: 0,
        isColacionEntregada: 0
      }
    ]
  };
  checkMarcacionRelaizada(isMarcacionRealiada) {
    return isMarcacionRealiada === 1 ? (
      <span className="text-success">Marcacion Realizada</span>
    ) : (
      <span className="text-danger">Marcacion No Realizada</span>
    );
  }

  handlerEntregarColacion = id => {
    console.log(id);
  };

  checkColacionEntregada(isMarcacionRealizada, isColacionEntregada, id) {
    if (isMarcacionRealizada === 1 && isColacionEntregada === 1)
      return <span className="text-success">Colacion Entregada</span>;

    if (isMarcacionRealizada === 1 && isColacionEntregada === 0)
      return (
        <button
          className="btn btn-success"
          onClick={() => this.handlerEntregarColacion(id)}
        >
          Entregar Colacion
        </button>
      );

    if (isMarcacionRealizada === 0 && isColacionEntregada === 0)
      return (
        <button disabled className="btn btn-secondary">
          Entregar Colacion
        </button>
      );
  }
  render() {
    return (
      <React.Fragment>
        <NavBarComponent />
        <div className="container">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>FechaPedido</th>
                <th>Nombre</th>
                <th>Rut</th>
                <th>Marcacion</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(data => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.FechaPedido}</td>
                  <td>{data.Nombre}</td>
                  <td>{data.rut}</td>
                  <td>
                    {this.checkMarcacionRelaizada(data.isMarcacionRealiada)}
                  </td>
                  <td>
                    {this.checkColacionEntregada(
                      data.isMarcacionRealiada,
                      data.isColacionEntregada,
                      data.id
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default RetirarColacion;
