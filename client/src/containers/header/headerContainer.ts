import { IApplicationState } from "../../types/redux"
import { connect } from "react-redux";
import { Header } from "../../components/Header";

export const mapStateToProps = (state: IApplicationState) => {
  return {
    categories: state.categories,
  }
}

export const HeaderContainer = connect(mapStateToProps)(Header);
