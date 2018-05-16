import React from 'react'

export const Toolbar = () => (
  <div id="toolbar">

  <select className="ql-size">
    <option value="small"></option>
    <option defaultValue="false"></option>
    <option value="large"></option>
    <option value="huge"></option>
  </select>

  <button className="ql-bold"></button>
  <button className="ql-script" value="sub"></button>
  <button className="ql-script" value="super"></button>
</div>

);
