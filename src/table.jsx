// table.js
import React from 'react';

const Table = ({ data, handleEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th className="name">First Name</th>
          <th className="name">Last Name</th>
          <th className='email'>Email</th>
          <th className="age">Age</th>
          <th className='photos'>PHOTOS</th>
          <th className="Details">Details</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className="name">{item.first_name}</td>
            <td className="name">{item.last_name}</td>
            <td className='email'>{item.email}</td>
            <td className="age">{item.age}</td>
            <td>
              <img
                style={{ maxWidth: '1800px', height: '180px', display: 'flow-root'}}
                src={process.env.PUBLIC_URL + '/' + item.photo}
                alt={`${item.first_name}'s photo`}
              />
            </td>
            <td className="Details">
              {item.links && item.links.map((link, linkIndex) => (
                <a key={linkIndex} href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
