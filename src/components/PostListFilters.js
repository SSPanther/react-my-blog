import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByTitle } from '../actions/filters';

export class PostListFilters extends React.Component {

  onTextFilterChange = (e) => {
    const textFilter = e.target.value;
    this.props.setTextFilter(textFilter);
  }

  onSortChange = (e) => {
    const sortBy = e.target.value;
    if (sortBy === 'title') {
      this.props.sortByTitle();
    }
    if (sortBy === 'date') {
      this.props.sortByDate();
    }
  }

  render() {
    return (
      <div className="filters-group">
        <div className="input-group">
          <div className="input-group__item">
            <input 
              type="text"
              className="text-input"
              placeholder="Search posts"
              onChange={this.onTextFilterChange}
            />
          </div>
          <div className="input-group__item">
            <select 
              className="select"
              onChange={this.onSortChange}>
                <option value="title">By Title</option>
                <option value="date">By Created Date</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByTitle: () => dispatch(sortByTitle())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostListFilters);