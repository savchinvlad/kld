import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { SortPopup, Categories, PizzaBlock, PizzaLoadingBlock } from '../components';

import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas }  from "../redux/actions/pizzas";


const categoryNames = ['Люди', 'Пейзажи', 'Животные', 'Цветы', 'Архитектура'];
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавит', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    if (!items.lenght) {
    dispatch(fetchPizzas(sortBy, category));
    }
 }, [sortBy, category]);

const onSelectCategory = React.useCallback ((index) => {
  dispatch(setCategory(index));
}, []);

const onSelectSortType = React.useCallback ((type) => {
  dispatch(setSortBy(type));
}, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories 
        activeCategory={category}
        onClickCategory={onSelectCategory} 
        items={categoryNames}/>
        <SortPopup 
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}/>
      </div>
      <h2 className="content__title">Все наборы</h2>
      <div className="content__items">
        {isLoaded 
        ? items.map(obj => <PizzaBlock key={obj.id} isLoaded={true} {...obj}/>) 
        : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
    </div>
  </div>
  )
}

export default Home