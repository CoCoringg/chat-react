import React from 'react';
import './assets/css/mdb.dark.min.css';
import './assets/css/mdb.dark.rtl.min.css';
import './assets/css/mdb.min.css';
import './assets/css/mdb.rtl.min.css';
import './assets/css/bar.css';

const Test = () => {
    return (
        <div className="bar pt-3 pe-3" data-mdb-perfect-scrollbar="true"
                        style={{ position: 'relative', height: '400px' }}>
                        <div className={`d-flex flex-row justify-content-${comm}`}>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                alt="avatar 1" style={{ width: '45px', height: '100%' }} />
                            <div>
                                <p className="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: '#f5f6f7' }}>
                                    시작??</p>
                                <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-end">
                            <div>
                                <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                                    끝??</p>
                                <p className="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
                            </div>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                alt="avatar 1" style={{ width: '45px', height: '100%' }} />
                        </div>
                    </div>
        
    );
};

export default Test;