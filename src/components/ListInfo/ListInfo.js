import React from 'react';
import PropTypes from 'prop-types';
import ListPage from './ListPage';
import './ListInfo.css';
const test = (list) => {
  return list.map((item) => <ListPage key={item.id} pagecontent={item} />);
};
const ListInfo = (props) => {
  return <table className="tableinfo">{test(props.listcontent)}</table>;
};

ListInfo.propTypes = {
  listcontent: PropTypes.array,
};
export default ListInfo;
