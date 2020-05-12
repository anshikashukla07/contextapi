import React, {Component} from 'react';
import PropTypes from 'prop-types';

// gray background
const backdropStyle = {
	position: 'fixed',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	backgroundColor: 'rgba(0,0,0,0.3)',
	padding: 50,

};

const modalStyle = {
	backgroundColor: '#fff',
	borderRadius: 5,
	maxWidth: 500,
	maxHeight: "inherit",
	margin: '0 auto',
	padding: 30,
	position: 'relative'
};

const footerStyle = {
	position: "absolute",
	bottom: 20
};

class ModalClass extends Component {
	onClose = (e) => {
		this.props.onClose && this.props.onClose(e);
	}

	render() {
		if(!this.props.show) {
			return null;
		}	
			return (

				<div className="modalData" style={backdropStyle}>
					<div className="modalStyle" style={modalStyle}>
						{this.props.children}
						<div className="footerStyle" style={footerStyle}>
							<button onClick={(e) => { this.onClose(e)}}>
								Close
							</button>
						</div>
					</div>
				</div>
			)
	}
}

ModalClass.propTypes = {
	onClose: PropTypes.func.isRequired
}

export default ModalClass;
