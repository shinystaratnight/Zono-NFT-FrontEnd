import React from 'react'
import { usePagination } from '@material-ui/lab/Pagination';

import { List, Cell, NextPrev, PrevIcon, NextIcon } from './styles'

const Pagination = (props) => {

  const { page, handleChange, count} = props 

  const { items } = usePagination({
    count: count, 
    onChange: handleChange,
    page: page
  });

  return (
    <List>
      {items.map(({ page, type, selected, disabled, ...item }, index) => {
        let children = null;

        if (type === 'start-ellipsis' || type === 'end-ellipsis') {
          children = '…';
        } else if (type === 'page') {
          children = (
            <Cell type="button" active={selected} {...item}>
              {page}
            </Cell>
          );
        } else {
          children = (
            type === 'previous' ? (
              page !== 0 &&
              <NextPrev type="button" {...item}>
                <PrevIcon /> PREV
              </NextPrev>
            ) : (
              <NextPrev type="button" {...item} disabled={disabled}>
                NEXT
                <NextIcon />
              </NextPrev>
            )
          );
        }
        return <li key={index}>{children}</li>;
      })}
    </List>
  )
}

export default Pagination
