import React, { Component } from "react";

import styles from "./Form.module.css";

export default class Form extends Component {
  state = {
    query: "",
  };
  componentDidMount() {}

  handleChange = (e) => this.setState({ query: e.target.value });
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchQuery(this.state.query);
    this.setState({ query: "" });
  };
  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
          ></input>
        </label>
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
    );
  }
}
