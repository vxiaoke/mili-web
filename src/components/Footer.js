import React, { Component } from 'react';
import qrcode from '../assets/qrcode.jpg';

export default class Header extends Component {
  render() {
    return (
      <div style={styles.footBox}>
        <div style={styles.footContentBox}>
          <div style={styles.titleBox}>
            <div style={styles.title}>企业公司</div>
            <div style={styles.line} />
          </div>
          <div style={styles.text}>杭州湘靖网络科技有限公司</div>
        </div>
        <div style={styles.footContentBox}>
          <div style={styles.titleBox}>
            <div style={styles.title}>联系我们</div>
            <div style={styles.line} />
          </div>
          <div style={styles.text}>企业邮箱：business@vxiaoke360.com</div>
          <div style={styles.text}>媒体报道：pr@vxiaoke360.com</div>
        </div>
        <div style={styles.codeImgBox}>
          <img src={qrcode} style={styles.codeImg} />
          <div style={styles.codeText}>扫码下载<span style={styles.codeTextColor}>米粒生活</span></div>
        </div>
      </div>
    );
  }
}

const styles = {
  footBox: {
    background: '#000',
    width: '100%',
    padding: '80px 160px 60px 160px',
    display: 'flex',
    boxSizing: 'border-box',
  },
  footContentBox: {
    marginRight: '85px',
  },
  titleBox: {
    marginBottom: '30px',
  },
  text: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '16px',
    color: '#fff',
    marginBottom: '10px'
  },
  title: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: '20px',
    color: '#fff',
  },
  line: {
    height: '2px',
    background: '#D8D8D8',
    marginTop: '15px',
    width: '78px'
  },
  codeImgBox: {
    width: '130px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  codeImg: {
    width: '120px',
    height: '120px',
    marginBottom: '12px',
  },
  codeText: {
    color: '#fff',
    fontFamily: 'PingFangSC-Medium',
    fontSize: '14px',
    textAlign: 'center'
  },
  codeTextColor: {
    color: '#F731A7',
    fontSize: '18px',
    fontWeight: 'bold',
  },
}