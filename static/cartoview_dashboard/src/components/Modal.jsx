import DefaultModalStyle from '../constants/Constants.jsx';
import Modal from 'react-modal';

export default function (props) {
  return <Modal contentLabel={"modal"} className="modal-dialog" isOpen={props.isOpen} style={DefaultModalStyle}>
    <div className="">
      <div className="panel panel-default">
        <div className="panel-heading">
          {props.title}
          <div className="pull-right">
            <a className="btn btn-link btn-xs" onClick={(e) => { e.preventDefault(); props.close(); }}>
              <i className="glyphicon glyphicon-remove"></i>
            </a>
          </div>
        </div>
        <div className="panel-body">
          {props.children}
        </div>
      </div>
    </div>
  </Modal>;
}
