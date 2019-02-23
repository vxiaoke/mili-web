import React, { Component } from 'react';
import aboutBanner from '../assets/img-about.png';
import imgBoss from '../assets/img-boss.png';

export default class About extends Component {
  render() {
    return (
      <div style={styles.container}>
        <img src={aboutBanner} style={styles.aboutBanner} />
        <div style={styles.companyInfoContainer}>
          <div style={styles.companyInfoBox}>
            <div style={styles.companyTitleBox}>
              <div style={styles.companyInfoTitle}>团队理念</div>
              <div style={styles.titleLine} />
            </div>
            <div style={styles.conpanyInfoText}>
              <div>美丽生活在米粒。</div>
              <div>米粒生活的愿景是，帮大家最大程度的省钱购物，并借助我们社交分享电商的红利带大家赚钱。</div>
            </div>
            <div style={styles.companyTitleBox}>
              <div style={styles.companyInfoTitle}>团队介绍</div>
              <div style={styles.titleLine} />
            </div>
            <div style={styles.conpanyInfoText}>
              米粒生活是真正实现“购物省钱，分享赚钱，0成本轻松创业”的社交分享电商平台！在2017年底团队即获得IDG资本领投的4000万元，CEO为前阿里巴巴核心管理层人员，团队成员均来自阿里巴巴、网易、众安保险、返利网等一线互联网平台，成员在电商领域、供应链端均有多年经验积累。
            </div>
          </div>
        </div>
        <div style={styles.bossInfoTitle}>
          <div style={styles.bossInfoChinese}>创始人介绍</div>
          <div style={styles.bossInfoEnglish}>About Founder</div>
        </div>
        <div style={styles.bossInfoBox}>
          <img src={imgBoss} style={styles.bossImg} />
          <div style={styles.bossNameBox}>
            <div style={styles.bossName}>吴云昌</div>
            <div style={styles.bossPosition}>创始人，阿里系创业者</div>
          </div>
          <div style={styles.experienceListBox}>
            <div style={styles.experienceLine} />
            <div style={styles.experienceList}>
              <div style={styles.experienceItem}>
                <div style={styles.experienceIcon} />
                <div style={styles.experienceText}>
                  <span style={styles.experienceTextBold}>2017年—至今：</span>
                  杭州湘靖网络科技有限公司创始人
                </div>
              </div>
              <div style={styles.experienceItem}>
                <div style={styles.experienceIcon} />
                <div style={styles.experienceText}>
                  <span style={styles.experienceTextBold}>2016年-2017年：</span>
                  17互助发起人&联合创始人
                </div>
              </div>
              <div style={styles.experienceItem}>
                <div style={styles.experienceIcon} />
                <div style={styles.experienceText}>
                  <span style={styles.experienceTextBold}>2013年-2016年：</span>
                  众安保险阿里巴巴事业部、消费金融事业部总经理
                </div>
              </div>
              <div style={styles.experienceItem}>
                <div style={styles.experienceIcon} />
                <div style={styles.experienceText}>
                  <span style={styles.experienceTextBold}>2010年-2013年：</span>
                  蚂蚁金服微贷（现网商银行）产品团队负责人
                </div>
              </div>
              <div style={styles.experienceItem}>
                <div style={styles.experienceIcon} />
                <div style={styles.experienceText}>
                  <span style={styles.experienceTextBold}>2008年-2010年：</span>
                  慧聪网产品团队负责人
                </div>
              </div>
              <div style={styles.experienceItem}>
                <div style={styles.experienceIcon} />
                <div style={styles.experienceText}>
                  <span style={styles.experienceTextBold}>2005年-2007年：</span>
                  北京科技大学硕士研究生
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    background: '#f6f6f6'
  },
  aboutBanner: {
    width: '100%',
    height: '400px',
    display: 'block',
  },
  companyInfoContainer: {
    position: 'absolute',
    top: '280px',
    left: 0,
    display: 'flex',
    width: '100%'
  },
  companyInfoBox: {
    background: '#fff',
    margin: '0 auto',
    borderRadius: '4px',
    padding: '40px 60px',
    boxShadow: '0 8px 20px 0 rgba(0, 0, 0, 0.05)',
    width: '1120px',
    boxSizing: 'border-box'
  },
  companyTitleBox: {
    marginBottom: '25px',
  },
  companyInfoTitle: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: '32px',
    color: 'rgba(0, 0, 0, 0.85)',
    marginBottom: '12px',
  },
  titleLine: {
    background: 'rgba(0,0,0,0.15)',
    width: '48px',
    height: '4px',
    marginLeft: '40px',
  },
  conpanyInfoText: {
    fontFamily: 'PingFangSC-Regular',
    color: 'rgba(0, 0, 0, 0.65)',
    marginBottom: '24px',
    lineHeight: '26px',
    fontSize: '16px',
  },
  bossInfoTitle: {
    marginTop: '370px',
    textAlign: 'center',
    marginBottom: '80px',
  },
  bossInfoChinese: {
    fontFamily: 'PingFangSC-Semibold',
    color: 'rgba(0, 0, 0, 0.85)',
    fontSize: '36px',
  },
  bossInfoEnglish: {
    marginTop: '-40px',
    fontFamily: 'PingFangSC-Regular',
    color: 'rgba(0, 0, 0, 0.04)',
    fontSize: '48px',
  },
  bossInfoBox: {
    width: '1120px',
    margin: '0 auto',
    display: 'flex',
    position: 'relative',
    paddingBottom: '158px'
  },
  bossImg: {
    width: '400px',
    height: '400px',
    marginRight: '30px',
  },
  bossNameBox: {
    display: 'flex',
    marginTop: '30px',
    alignContent: 'flex-end',
    height: '40px',
  },
  bossName: {
    fontFamily: 'PingFangSC-Medium',
    color: '#000',
    fontSize: '32px',
    marginRight: '20px',
  },
  bossPosition: {
    fontFamily: 'PingFangSC-Regular',
    color: 'rgba(0, 0, 0, 0.85)',
    fontSize: '16px',
    marginTop: '18px'
  },
  experienceListBox: {
    position: 'absolute',
    right: 0,
    top: '92px',
    zIndex: 99,
    background: '#fff',
    boxShadow: '0 8px 20px 0 rgba(0, 0, 0, 0.05)',
    padding: '56px 60px',
    boxSizing: 'border-box',
    display: 'flex',
    width: '775px'
  },
  experienceLine: {
    background: 'rgba(255, 101, 145, 0.5)',
    width: '1px',
    height: '246px',
    marginTop: '8px'
  },
  experienceList: {
    marginLeft: '-4px',
  },
  experienceIcon: {
    background: '#FF6591',
    width: '7px',
    height: '7px',
    marginRight: '38px',
    borderRadius: '100%',
  },
  experienceText: {
    fontFamily: 'PingFangSC-Regular',
    color: '#000',
    fontSize: '16px',
  },
  experienceTextBold: {
    fontFamily: 'PingFangSC-Medium',
  },
  experienceItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '26px',
  },
}

