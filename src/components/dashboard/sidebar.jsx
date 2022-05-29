import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewListIcon from '@mui/icons-material/ViewList';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SettingsIcon from '@mui/icons-material/Settings';
import {Link} from 'react-router-dom';

function Sidebar(props) {
	return (
		<div
			className="d-flex flex-column flex-shrink-0"
			style={{ width: '4.5rem', height:'100%' }}
		>
			<Link
				to="/"
				className="d-block p-3 link-dark text-decoration-none"
				title=""
				data-bs-toggle="tooltip"
				data-bs-placement="right"
				data-bs-original-title="Icon-only"
			>
				<span className="visually-hidden">Icon-only</span>
			</Link>
			<ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
				<li className="nav-item">
					<Link
						to="/"
						className="nav-link  py-3 border-bottom"
						aria-current="page"
						title=""
						data-bs-toggle="tooltip"
						data-bs-placement="right"
						data-bs-original-title="Home"
					><HomeIcon/>
            </Link>
				</li>
				<li>
					<Link
						to="/dashboard"
						className="nav-link py-3 border-bottom"
						title=""
						data-bs-toggle="tooltip"
						data-bs-placement="right"
						data-bs-original-title="Dashboard"
					>
            <DashboardIcon/>
            </Link>
				</li>
				<li>
					<Link
						to="/dashboard/documents"
						className="nav-link py-3 border-bottom"
						title=""
						data-bs-toggle="tooltip"
						data-bs-placement="right"
						data-bs-original-title="Orders"
					>
            <ViewListIcon/>
            </Link>
				</li>
				<li>
					<Link
						to="/dashboard/balance"
						className="nav-link py-3 border-bottom"
						title=""
						data-bs-toggle="tooltip"
						data-bs-placement="right"
						data-bs-original-title="Products"
					>
            <AccountBalanceWalletIcon/>
            </Link>
				</li>
				<li>
					<Link
						to="/dashboard/settings"
						className="nav-link py-3 border-bottom"
						title=""
						data-bs-toggle="tooltip"
						data-bs-placement="right"
						data-bs-original-title="Customers"
					>
            <SettingsIcon/>
            </Link>
				</li>
			</ul>
			<div className="dropdown border-top">
				<Link
					to="#"
					className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
					id="dropdownUser3"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					<img
						src="https://github.com/mdo.png"
						alt="mdo"
						width="24"
						height="24"
						className="rounded-circle"
					/>
				</Link>
			</div>
		</div>
	);
}
export default Sidebar;
