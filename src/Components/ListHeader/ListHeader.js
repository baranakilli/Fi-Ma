import './ListHeader.css';

const ListHeader = ({ listTitle }) => {
  return (
    <div id="list-header">
      <div id='list-title-box'>
        <div id="loader"></div>
        <h1 id="list-title">
          {listTitle}
        </h1>
      </div>
    </div>
  );
}

export default ListHeader;