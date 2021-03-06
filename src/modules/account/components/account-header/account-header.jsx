import React from 'react'
import PropTypes from 'prop-types'
import TextFit from 'react-textfit'

import Styles from 'modules/account/components/account-header/account-header.styles'

const AccountHeader = (p) => {
  // assign defaults incase we have nulls for value
  const ethValue = p.stats[0].totalRealEth.value.rounded
  const repValue = p.stats[0].totalRep.value.rounded

  return (
    <TextFit mode="single" min={16} max={90}>
      <div
        className={Styles.AccountHeader}
      >
        <div
          title={p.stats[0].totalRealEth.title}
          className={Styles.AccountHeader__Currency}
        >
          <span className="eth_value"> {ethValue} </span>
          <span className={Styles['AccountHeader__Currency-label']}>
            {p.stats[0].totalRealEth.label}
          </span>
        </div>
        <div
          title={p.stats[0].totalRep.title}
          className={Styles.AccountHeader__Currency}
        >
          <span className="rep_value"> {repValue} </span>
          <span className={Styles['AccountHeader__Currency-label']}>
            {p.stats[0].totalRep.label}
          </span>
        </div>
      </div>
    </TextFit>
  )
}

AccountHeader.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  series: PropTypes.object,
  stats: PropTypes.array,
}

export default AccountHeader
