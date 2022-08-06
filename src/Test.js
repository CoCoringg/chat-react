import React from 'react';
import './assets/css/mdb.dark.min.css';
import './assets/css/mdb.dark.rtl.min.css';
import './assets/css/mdb.min.css';
import './assets/css/mdb.rtl.min.css';
import './assets/css/bar.css';

const Test = () => {
    return (
        <div>
            <section style={{ backgroundColor: '#CDC4F9' }}>
                <div className="container py-5">

                    <div className="row">
                        <div className="col-md-12">

                            <div className="card" id="chat3" style={{ borderRadius: '15px' }}>
                                <div className="card-body">

                                    <div className="row">
                                        <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">

                                            <div className="p-3">
                                                <div className="bar" data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: '400px' }}>
                                                    <ul className="list-unstyled mb-0">
                                                        <li className="p-2 border-bottom">
                                                            <a href="#!" className="d-flex justify-content-between">
                                                                <div className="d-flex flex-row">
                                                                    <div>
                                                                        <img
                                                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                                                            alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                                                        <span className="badge bg-success badge-dot"></span>
                                                                    </div>
                                                                    <div className="pt-1">
                                                                        <p className="fw-bold mb-0">Marie Horwitz</p>
                                                                        <p className="small text-muted">Hello, Are you there?</p>
                                                                    </div>
                                                                </div>
                                                                <div className="pt-1">
                                                                    <p className="small text-muted mb-1">Just now</p>
                                                                    <span className="badge bg-danger rounded-pill float-end">3</span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        
                                                    </ul>
                                                </div>
                                                
                                            </div>

                                        </div>
                                        {/**여기여기 */}
                                        <div className="col-md-6 col-lg-7 col-xl-8">

                                            <div className="bar pt-3 pe-3" data-mdb-perfect-scrollbar="true"
                                                style={{ position: 'relative', height: '400px' }}>

                                                <div className="d-flex flex-row justify-content-start">
                                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                                        alt="avatar 1" style={{ width: '45px', height: '100%' }} />
                                                    <div>
                                                        <p className="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: '#f5f6f7' }}>Lorem ipsum
                                                            dolor
                                                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                            dolore
                                                            magna aliqua.</p>
                                                        <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row justify-content-end">
                                                    <div>
                                                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Ut enim ad minim veniam,
                                                            quis
                                                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                        <p className="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
                                                    </div>
                                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                                        alt="avatar 1" style={{ width: '45px', height: '100%' }} />
                                                </div>

    

                                            </div>
                                        

                                            <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                                    alt="avatar 3" style={{ width: '40px', height: '100%' }} />
                                                <input type="text" className="form-control form-control-lg" id="exampleFormControlInput2"
                                                    placeholder="Type message" />
                                                <a className="ms-1 text-muted" href="#!"><i className="fas fa-paperclip"></i></a>
                                                <a className="ms-3 text-muted" href="#!"><i className="fas fa-smile"></i></a>
                                                <button><a className="ms-3" href="#!"><i className="fas fa-paper-plane"></i></a>버튼</button>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Test;