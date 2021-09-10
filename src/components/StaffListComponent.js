import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import dateFormat from 'dateformat';


class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state= {
            selectedStaff: null
        }
    }

    showIn(staff) {
        this.setState({
            selectedStaff: staff
        })
    }

    renderStaff(staff) {
        if(staff != null) {
            return (
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 bg-warning">
                    <h3>Họ và tên: {staff.name}</h3>
                    <p>Ngày sinh: {dateFormat(staff.doB,"dd/mm/yyyy")} </p>
                    <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")} </p>
                    <p>Phòng ban: {staff.department.name} </p>
                    <p>Số ngày nghĩ còn lại: {staff.annualLeave} </p>
                    <p>Số ngày đã làm thêm: {staff.overTime} </p>
                </div>
            )
        } else {
            return <div></div>
        }
    }

    render() {
        const staffs = this.props.staffs.map((staff) => {
            return (
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3">
                    <div className="d-grid">
                        <button className="btn btn-success btn-lg" onClick={() => this.showIn(staff)}>{staff.name}</button>
                    </div>
                    
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    {staffs}
                </div>
                <div className="row">
                    {this.renderStaff(this.state.selectedStaff)}
                </div>
            </div>
        )
    }
}
export default StaffList;
