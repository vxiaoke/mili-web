import React, { Component } from 'react';
import qrcode from '../assets/qrcode.jpg';

export default class Qrcode extends Component {
  render() {
    return (
      <div style={styles.fixedQrcode}>
        <div style={styles.fixedTitle}>米粒生活全国合伙人火热招募中，关注公众号咨询官方客服！</div>
        <img src={qrcode} style={styles.qrcodeImg} />
        <div style={styles.qrcodeText}>微信扫码关注公众号</div>
      </div>
    );
  }
}

const styles = {
  fixedQrcode: {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    background: '#FFF2F6',
    width: '234px',
    height: '249px',
    borderRadius: '4px',
    overflow: 'hidden',
    zIndex: 999,
    boxShadow: '0px 0px 14px rgba(0, 0, 0, 0.4)'
  },
  fixedTitle: {
    background: '#F731A7',
    width: '100%',
    height: '62px',
    padding: '0 10px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'PingFangSC-Regular',
    fontSize: '14px',
    boxSizing: 'border-box',
  },
  qrcodeImg: {
    width: '140px',
    height: '140px',
    display: 'block',
    margin: '10px auto',
  },
  qrcodeText: {
    color: '#666',
    fontFamily: 'PingFangSC-Regular',
    fontSize: '12px',
    textAlign: 'center',
  },
}