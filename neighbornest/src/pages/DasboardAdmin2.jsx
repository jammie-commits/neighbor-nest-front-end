import { FunctionComponent, useCallback } from "react";
import AvatarContainer from "./avatar-container";
import "./dashboard-admin.css";

export type DashboardAdminType = {
  className?: string;
};

const DashboardAdmin: FunctionComponent<DashboardAdminType> = ({
  className = "",
}) => {
  const onRequestIconsContainerClick = useCallback(() => {
    // Please sync "Dashboard Admin 1" to the project
  }, []);

  const onRequestIconsContainerClick1 = useCallback(() => {
    // Please sync "Dashboard Admin 3" to the project
  }, []);

  const onProfileContainerClick = useCallback(() => {
    // Please sync "Admin Profile" to the project
  }, []);

  return (
    <div className={`dashboard-admin-2 ${className}`}>
      <div className="navigation">
        <img
          className="white-and-black-modern-abstrac-icon"
          loading="lazy"
          alt=""
          src="/white-and-black-modern-abstract-beauty-logoremovebgpreview-1@2x.png"
        />
        <div className="content">
          <div className="dashboard">
            <div className="requests">
              <div
                className="request-icons"
                onClick={onRequestIconsContainerClick}
              >
                <img
                  className="vuesaxlinearcategory-icon"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlinearcategory.svg"
                />
                <div className="dashboard1">Dashboard</div>
              </div>
              <button className="residents">
                <img
                  className="fluentpeople-32-regular-icon"
                  alt=""
                  src="/fluentpeople32regular.svg"
                />
                <div className="residents-wrapper">
                  <div className="residents1">Residents</div>
                </div>
              </button>
              <div
                className="request-icons1"
                onClick={onRequestIconsContainerClick1}
              >
                <img
                  className="uilmessage-icon"
                  loading="lazy"
                  alt=""
                  src="/uilmessage.svg"
                />
                <div className="requests1">Requests</div>
              </div>
            </div>
            <div className="settings">
              <div className="setting-icons">
                <img
                  className="vuesaxlinearsetting-2-icon"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlinearsetting2.svg"
                />
                <div className="settings1">Settings</div>
              </div>
              <div className="setting-icons1">
                <img
                  className="vuesaxlinearlogout-icon"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlinearlogout.svg"
                />
                <div className="logout">Logout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="users">
        <div className="search">
          <header className="search-bar">
            <div className="rectangle-parent">
              <div className="frame-child" />
              <img
                className="vuesaxlinearsearch-normal-icon"
                alt=""
                src="/vuesaxlinearsearchnormal.svg"
              />
              <input
                className="search-residents"
                placeholder="Search residents"
                type="text"
              />
            </div>
            <div className="profiles">
              <div className="profile" onClick={onProfileContainerClick}>
                <img
                  className="picture-icon"
                  loading="lazy"
                  alt=""
                  src="/ellipse-1@2x.png"
                />
                <div className="info">
                  <div className="name">
                    <div className="karim-benzema">Karim Benzema</div>
                    <a className="admin">Admin</a>
                  </div>
                </div>
              </div>
              <div className="notification">
                <img
                  className="vuesaxlinearnotification-icon"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlinearnotification.svg"
                />
              </div>
            </div>
          </header>
          <div className="avatar-container-parent">
            <AvatarContainer avatar="/avatar@2x.png" />
            <AvatarContainer avatar="/avatar-1@2x.png" />
            <AvatarContainer avatar="/avatar-2@2x.png" />
            <AvatarContainer avatar="/avatar-3@2x.png" />
            <AvatarContainer avatar="/avatar-4@2x.png" />
            <AvatarContainer avatar="/avatar-5@2x.png" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardAdmin;
