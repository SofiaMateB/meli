export default function Summary({ gy,col }) {
    return (   
   <div className={`${col ? 'col-md-4' : ''} list-group ${gy} ms-5`}>
                          <ul className="list-group">
            
                          <li className="list-group-item">  <h5 className="andes-typography--type-body andes-typography--size-m" >Resumen de compra</h5></li>             
                            <li className="custm-l list-group-item d-flex justify-content-between align-items-center andes-typography--type-body andes-typography--size-m" >
                            Productos(2)
                              <span className="andes-typography--size-m">$1.500.000</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center andes-typography--type-body andes-typography--size-m">
                              Envio
                              <span>$10.600</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center pb-3 andes-typography--type-body andes-typography--size-m fw-bold" >Total: 
                              <strong>$1.510.600</strong></li>
                          </ul>

                    </div>
    );
}   