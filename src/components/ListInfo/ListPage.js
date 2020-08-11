import React from 'react';
import PropTypes from 'prop-types';
import './ListPage.css';

const ListPage = (props) => {
  return (
    <tbody className="body">
      <tr>
        <td rowSpan="2" className="contenthead">
          {props.pagecontent.head}
        </td>
        <td className="content" id="topic">
          {props.pagecontent.contenthead}
        </td>
      </tr>
      <tr>
        <td className="content">{props.pagecontent.content}</td>
      </tr>
    </tbody>
  );
};

ListPage.propTypes = {
  pagecontent: PropTypes.object,
};
export default ListPage;
