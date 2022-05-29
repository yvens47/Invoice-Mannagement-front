import React, {useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import './dashboard.css';
import Sidebar from "./sidebar"

function Dashboard(props) {
  useEffect (()=>{
    document.title = " My dashboard"
  }, [])
	return (
		<div className="wrapper dashboard d-flex ">
			<div className="sidebar border-end flex-shrink-1 pt-5">
        <Sidebar/>
        </div>
			<div className="content flex-grow-1 py-5 px-3">
				<div className="container">
					<div className="row">
						<Outlet />
					</div>
				</div>
			</div>

			<div
				className="modal fade"
				id="staticBackdrop"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabIndex="-1"
				aria-labelledby="staticBackdropLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="staticBackdropLabel">
								Modal title
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							/>
						</div>
						<div className="modal-body">...</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								Close
							</button>
							<button type="button" className="btn btn-primary">
								Understood
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Dashboard;
