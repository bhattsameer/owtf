import { React, Component } from 'react';
import { Chart } from './Chart.js';
import { WorkerPanel } from './WorkerPanel.js';
import { VulnerabilityPanel } from './Panel.js';
import { GitHubReport } from './GitHubReport.js';
import { SEVERITY_CHART_URL, SEVERITY_PANEL_URL, WORKER_PANEL_URL, ERROR_URL, 
        FILE_SERVER_PORT, POLLINTERVAL } from '../Constants.js';

/**
 * React Component for Dashboard.
 * This is main component which renders the Dashboard page.
 * - Renders on (URL)  - /ui/dashboard/
 * - Child Components:
 *    - GitHubReport (GitHubReport.js) - Top right button to report issue/bug directly to OWTF GitHub Repo.
 *    - VulnerabilityPanel (Panel.js) - Shows total counts(plugins) of each severity of scanned targets.
 *    - Chart (Chart.js) - Creates pie chart. Describes how many **targets** are repored as low, high, info, critical etc.
 *    - WorkerPanel (WorkerPanel.js) - Shows progress of running targets and worker log.
 */

class Dashboard extends Component {
    render() {
        const HOST = location.protocol.concat("//").concat(
            window.location.hostname).concat(":");
        return (
            <div className="container-fluid">
                <div className="row">
                    <ul className="breadcrumb">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li className="active">Dashboard</li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-10 col-lg-10 nopadding welcome-heading">
                        <h1>Welcome to OWTF<small>, this is your dashboard</small>
                        </h1>
                    </div>
                    <div className="col-xs-12 col-md-2 col-lg-2 nopadding">
                        <GitHubReport source={ERROR_URL}/>
                    </div>
                </div>
                <VulnerabilityPanel source={SEVERITY_PANEL_URL}/>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 com-md-6 col-lg-6">
                        <Chart source={SEVERITY_CHART_URL}/>
                    </div>
                    <div className="col-xs-12 col-sm-12 com-md-6 col-lg-6">
                        <WorkerPanel source={HOST + FILE_SERVER_PORT + WORKER_PANEL_URL} pollInterval={POLLINTERVAL}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
