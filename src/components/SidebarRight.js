import React, {useContext} from 'react';

export default function SidebarRight() {
  return (
    <aside className="sidebar-right column is-2 mr-5">
      <figure className="image is-1by1">
        <img src="https://bulma.io/images/placeholders/480x480.png"/>
      </figure>

      <div className="mb-5"></div>

      <figure className="image is-4by3">
        <img src="https://bulma.io/images/placeholders/640x480.png"/>
      </figure>

      <div className="mb-3"></div>

      <figure className="image is-4by3">
        <img src="https://bulma.io/images/placeholders/640x480.png"/>
      </figure>
    </aside>
  );
}