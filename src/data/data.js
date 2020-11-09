// 单位垫付项目
const companyAdvanceData = [{
  'value': '1',
  'text': '医疗费'
},
{
  'value': '2',
  'text': '住院伙食补助费'
}]
const placeMedicalData = [{
  'value': '1',
  'text': '省内'
},
{
  'value': '2',
  'text': '省外'
}
]
const residenceTypeData = [{
  'value': '10',
  'text': '非农业户口'
},
{
  'value': '11',
  'text': '本地城镇户口'
},
{
  'value': '12',
  'text': '外地城镇户口'
},
{
  'value': '20',
  'text': '农业户口'
},
{
  'value': '21',
  'text': '本地农村户口'
},
{
  'value': '22',
  'text': '外地农村户口'
},
{
  'value': '30',
  'text': '港澳台侨人员'
},
{
  'value': '31',
  'text': '香港特别行政区居民'
},
{
  'value': '32',
  'text': '澳门特别行政区居民'
},
{
  'value': '33',
  'text': '台湾地区居民'
},
{
  'value': '34',
  'text': '华侨'
},
{
  'value': '40',
  'text': '外国人'
},
{
  'value': '41',
  'text': '未取得永久居留权的外国人'
},
{
  'value': '42',
  'text': '取得永久居留权的外国人'
},
{
  'value': '50',
  'text': '居民户口'
},
{
  'value': '51',
  'text': '本地居民户口'
},
{
  'value': '52',
  'text': '外地居民户口'
}
]
const sex = [{
  'value': '1',
  'text': '男性'
},
{
  'value': '2',
  'text': '女性'
}
]
const treatmentIssueStateData = [{
  'value': '2',
  'text': '工伤职工待遇暂停'
}, {
  'value': '3',
  'text': '工伤职工待遇终止'
}]
const orphansFlagData = [{
  'value': '0',
  'text': '非孤寡'
},
{
  'value': '1',
  'text': '孤寡'
}
]
const incapacityData = [{
  'value': '1',
  'text': '是'
},
{
  'value': '0',
  'text': '否'
}]
const receiptorRelation = [{
  'key': '1',
  'value': '配偶'
},
{
  'key': '2',
  'value': '子女'
},
{
  'key': '3',
  'value': '本人'
},
{
  'key': '4',
  'value': '孙子、孙女或外孙子、外孙女'
},
{
  'key': '5',
  'value': '父母'
},
{
  'key': '6',
  'value': '祖父母或外祖父母'
},
{
  'key': '7',
  'value': '兄弟姐妹'
},
{
  'key': '8',
  'value': '其他亲属'
}
]
const paymentTypeData = [{ 'value': '2000', 'text': '应缴未缴' }]
const modelTypeData = [{ 'text': '全国劳模', 'value': '01' }, { 'text': '省部级劳模', 'value': '02' }]
// 离退休人员死亡待遇核准支付
// 终止原因
const reasonData = [{ 'text': '死亡', 'value': '9' }]
// 领取方式, 发放方式.
const receiptorWayData = [{ 'text': '本人账户', 'value': '1' }, { 'text': '单位代发', 'value': '2' }, { 'text': '继承人账户', 'value': '3' }]
// 领取人关系
const receiptorRelationData = [{ 'text': '配偶', 'value': '1' }, { 'text': '子女', 'value': '2' }, { 'text': '本人', 'value': '3' }, { 'text': '孙子、孙女，或外孙子、外孙女', 'value': '4' }, { 'text': '父母', 'value': '5' }, { 'text': '祖父母或外祖父母', 'value': '6' }, { 'text': '兄、弟、姐、妹', 'value': '7' }, { 'text': '其他亲属', 'value': '8' }, { 'text': '非亲属', 'value': '9' }]
// 领取人证件类型
const drawerCertificateTypeData = [{ 'text': '居民身份证', 'value': '01' }, { 'text': '中国人民解放军军官证', 'value': '02' }, { 'text': '中国人民武装警察警官证', 'value': '03' }, { 'text': '香港特区护照/港澳居民来往内地通行证', 'value': '04' }, { 'text': '澳门特区护照/港澳居民来往内地通行证', 'value': '05' }, { 'text': '台湾居民来往大陆通行证', 'value': '06' }, { 'text': '外国人永久居留证', 'value': '07' }, { 'text': '外国人护照', 'value': '08' }, { 'text': '港澳台居民居住证', 'value': '16' }]
// 银行行别
const bankCodeData = [{ 'text': '中国工商银行', 'value': '102' }, { 'text': '中国农业银行', 'value': '103' }, { 'text': '中国银行', 'value': '104' }, { 'text': '中国建设银行', 'value': '105' }, { 'text': '中国邮政储蓄银行', 'value': '403' }]
// 新增退休人员养老保险待遇核准支付
// 享受最低养老金
const minimumBasicPensionData = [{ 'text': '否', 'value': '0' }, { 'text': '是', 'value': '1' }]
// 特殊工种类别：
const specialWorkTypeData = [{ 'text': '有毒', 'value': '1' }, { 'text': '有害', 'value': '2' }, { 'text': '井下', 'value': '3' }, { 'text': '高温', 'value': '4' }, { 'text': '高空', 'value': '5' }, { 'text': '特别繁重体力劳动', 'value': '6' }, { 'text': '高原', 'value': '7' }, { 'text': '其他', 'value': '9' }]
// 97年底前特殊工种年月：
const ageLimit97Data = [{ 'text': '满5年', 'value': '1' }, { 'text': '满10年', 'value': '2' }, { 'text': '满15年', 'value': '3' }]
// 管理形式：
const managementFormData = [{ 'text': '社区或村管理', 'value': '1' }, { 'text': '社会保险经办机构管理', 'value': '2' }, { 'text': '依托企业管理', 'value': '3' }, { 'text': '其他方式管理', 'value': '9' }]
// 发放丧葬抚恤金标识：
const funeralBenefitsFlagData = [{ 'text': '否', 'value': '0' }, { 'text': '是', 'value': '1' }]
// 补扣发放途径：
const repairButtonIssueData = [{ 'text': '委托银行发放', 'value': '11' }, { 'text': '单位代发（含个人委托单位领取）', 'value': '31' }, { 'text': '社会保障卡发放', 'value': '80' }]
// 待遇调整标识：
const adjustFlagData = [{ 'text': '否', 'value': '0' }, { 'text': '是', 'value': '1' }]
// 浮动物价补贴：
const floatingPriceSubsidyData = [{ 'text': '杭州地区', 'value': '330100' }, { 'text': '丽水地区', 'value': '332500' }, { 'text': '台州地区', 'value': '331000' }, { 'text': '舟山地区', 'value': '330900' }, { 'text': '衢州地区', 'value': '330800' }, { 'text': '金华地区', 'value': '330700' }, { 'text': '绍兴地区', 'value': '330600' }, { 'text': '宁波地区', 'value': '330200' }, { 'text': '温州地区', 'value': '330300' }, { 'text': '嘉兴地区', 'value': '330400' }, { 'text': '湖州地区', 'value': '330500' }]
// 山区海岛补贴：
const islandSubsidiesData = [{ 'text': '温州市洞头县', 'value': '330322' }, { 'text': '绍兴市新昌县', 'value': '330624' }, { 'text': '金华市磐安县', 'value': '330727' }, { 'text': '舟山市市辖区', 'value': '330901' }, { 'text': '舟山市定海区', 'value': '330902' }, { 'text': '舟山市普陀区', 'value': '330903' }, { 'text': '舟山市岱山县', 'value': '330921' }, { 'text': '舟山市嵊泗县', 'value': '330922' }, { 'text': '台州市玉环县', 'value': '331021' }, { 'text': '浙江省丽水市', 'value': '331100' }, { 'text': '丽水市市辖区', 'value': '331101' }, { 'text': '丽水市莲都区', 'value': '331102' }, { 'text': '丽水市青田县', 'value': '331121' }, { 'text': '丽水市缙云县', 'value': '331122' }, { 'text': '丽水市遂昌县', 'value': '331123' }, { 'text': '丽水市松阳县', 'value': '331124' }, { 'text': '丽水市云和县', 'value': '331125' }, { 'text': '丽水市庆元县', 'value': '331126' }, { 'text': '丽水市景宁畲族自治县', 'value': '331126' }, { 'text': '丽水市龙泉市', 'value': '331181' }]

// 工伤保险伤残一次性待遇核准支付
// 发放方式：
const issueModeData = [{ 'text': '委托银行发放', 'value': '11' }, { 'text': '邮储发放', 'value': '12' }, { 'text': '单位代发（含个人委托单位领取）', 'value': '31' }, { 'text': '社会保障卡发放', 'value': '80' }]
// 工伤发放方式
const injuryIssueMode = [{'key': '11','value': '委托银行发放'},{'key': '31','value': '单位代发'},{'key': '80','value': '社会保障卡发放'}]
// 险种类型
const insuranceCodeNameData = [{ 'text': '企业养老', 'value': '110' }, { 'text': '机关事业养老', 'value': '120' }, { 'text': '城乡居民养老', 'value': '170' }, { 'text': '失业保险', 'value': '210' }, { 'text': '基本医疗', 'value': '310' }, { 'text': '公务员补助', 'value': '320' }, { 'text': '大额医疗补助', 'value': '330' }, { 'text': '工伤保险', 'value': '410' }, { 'text': '生育保险', 'value': '510' }]
// 单位类型
const subjectIndustryData = [{
  'value': '0101',
  'text': '农业'
},
{
  'value': '0102',
  'text': '林业'
},
{
  'value': '0103',
  'text': '畜牧业'
},
{
  'value': '0104',
  'text': '渔业'
},
{
  'value': '0105',
  'text': '农、林、牧、渔服务业'
},
{
  'value': '0206',
  'text': '煤炭开采和洗选业'
},
{
  'value': '0207',
  'text': '石油和天然气开采业'
},
{
  'value': '0208',
  'text': '黑色金属矿采选业'
},
{
  'value': '0209',
  'text': '有色金属矿采选业'
},
{
  'value': '0210',
  'text': '非金属矿采选业'
},
{
  'value': '0211',
  'text': '开采辅助活动'
},
{
  'value': '0212',
  'text': '其他采矿业'
},
{
  'value': '0313',
  'text': '农副食品加工业'
},
{
  'value': '0314',
  'text': '食品制造业'
},
{
  'value': '0315',
  'text': '酒、饮料和精制茶制造业'
},
{
  'value': '0316',
  'text': '烟草制品业'
},
{
  'value': '0317',
  'text': '纺织业'
},
{
  'value': '0318',
  'text': '纺织服装、服饰业'
},
{
  'value': '0319',
  'text': '皮革、毛皮、羽毛及其制品和制鞋业'
},
{
  'value': '0320',
  'text': '木材加工及木、竹、藤、棕、草制品业'
},
{
  'value': '0321',
  'text': '家具制造业'
},
{
  'value': '0322',
  'text': '造纸和纸制品业'
},
{
  'value': '0323',
  'text': '印刷和记录媒介复制业'
},
{
  'value': '0324',
  'text': '文教、工美、体育和娱乐用品制造业'
},
{
  'value': '0325',
  'text': '石油加工、炼焦和核燃料加工业'
},
{
  'value': '0326',
  'text': '化学原料和化学制品制造业'
},
{
  'value': '0327',
  'text': '医药制造业'
},
{
  'value': '0328',
  'text': '化学纤维制造业'
},
{
  'value': '0329',
  'text': '橡胶和塑料制品业'
},
{
  'value': '0330',
  'text': '非金属矿物制品业'
},
{
  'value': '0331',
  'text': '黑色金属冶炼及压延加工业'
},
{
  'value': '0332',
  'text': '有色金属冶炼及压延加工业'
},
{
  'value': '0333',
  'text': '金属制品业'
},
{
  'value': '0334',
  'text': '通用设备制造业'
},
{
  'value': '0335',
  'text': '专用设备制造业'
},
{
  'value': '0336',
  'text': '汽车制造业'
},
{
  'value': '0337',
  'text': '铁路、船舶、航空航天和其他运输设备制造业'
},
{
  'value': '0338',
  'text': '电气机械和器材制造业'
},
{
  'value': '0339',
  'text': '计算机、通信和其他电子设备制造业'
},
{
  'value': '0340',
  'text': '仪器仪表制造业'
},
{
  'value': '0341',
  'text': '其他制造业'
},
{
  'value': '0342',
  'text': '废弃资源综合利用业'
},
{
  'value': '0343',
  'text': '金属制品、机械和设备修理业'
},
{
  'value': '0444',
  'text': '电力、热力生产和供应业'
},
{
  'value': '0445',
  'text': '燃气生产和供应业'
},
{
  'value': '0446',
  'text': '水的生产和供应业'
},
{
  'value': '0547',
  'text': '房屋建筑业'
},
{
  'value': '0548',
  'text': '土木工程建筑业'
},
{
  'value': '0549',
  'text': '建筑安装业'
},
{
  'value': '0550',
  'text': '建筑装饰和其他建筑业'
},
{
  'value': '0651',
  'text': '批发业'
},
{
  'value': '0652',
  'text': '零售业'
},
{
  'value': '0753',
  'text': '铁路运输业'
},
{
  'value': '0754',
  'text': '道路运输业'
},
{
  'value': '0755',
  'text': '水上运输业'
},
{
  'value': '0756',
  'text': '航空运输业'
},
{
  'value': '0757',
  'text': '管道运输业'
},
{
  'value': '0758',
  'text': '装卸搬运和运输代理业'
},
{
  'value': '0759',
  'text': '仓储业'
},
{
  'value': '0760',
  'text': '邮政业'
},
{
  'value': '0861',
  'text': '住宿业'
},
{
  'value': '0862',
  'text': '餐饮业'
},
{
  'value': '0963',
  'text': '电信、广播电视和卫星传输服务'
},
{
  'value': '0964',
  'text': '互联网和相关服务'
},
{
  'value': '0965',
  'text': '软件和信息技术服务业'
},
{
  'value': '1066',
  'text': '货币金融服务'
},
{
  'value': '1067',
  'text': '资本市场服务'
},
{
  'value': '1068',
  'text': '保险业'
},
{
  'value': '1069',
  'text': '其他金融业'
},
{
  'value': '1170',
  'text': '房地产业'
},
{
  'value': '1271',
  'text': '租赁业'
},
{
  'value': '1272',
  'text': '商务服务业'
},
{
  'value': '1373',
  'text': '研究和试验发展'
},
{
  'value': '1374',
  'text': '专业技术服务业'
},
{
  'value': '1375',
  'text': '科技推广和应用服务业'
},
{
  'value': '1476',
  'text': '水利管理业'
},
{
  'value': '1477',
  'text': '生态保护和环境治理业'
},
{
  'value': '1478',
  'text': '公共设施管理业'
},
{
  'value': '1579',
  'text': '居民服务业'
},
{
  'value': '1580',
  'text': '机动车、电子产品和日用产品修理业'
},
{
  'value': '1581',
  'text': '其他服务业'
},
{
  'value': '1682',
  'text': '教育'
},
{
  'value': '1783',
  'text': '卫生'
},
{
  'value': '1784',
  'text': '社会工作'
},
{
  'value': '1885',
  'text': '新闻和出版业'
},
{
  'value': '1886',
  'text': '广播、电视、电影和影视录音制作业'
},
{
  'value': '1887',
  'text': '文化艺术业'
},
{
  'value': '1888',
  'text': '体育'
},
{
  'value': '1889',
  'text': '娱乐业'
},
{
  'value': '1990',
  'text': '中国共产党机关'
},
{
  'value': '1991',
  'text': '国家机构'
},
{
  'value': '1992',
  'text': '人民政协、民主党派'
},
{
  'value': '1993',
  'text': '社会保障'
},
{
  'value': '1994',
  'text': '群众团体、社会团体和其他成员组织'
},
{
  'value': '1995',
  'text': '基层群众自治组织'
},
{
  'value': '2096',
  'text': '国际组织'
}
]
const economyTypeData = [{
  'value': '100',
  'text': '内资'
},
{
  'value': '110',
  'text': '国有全资'
},
{
  'value': '120',
  'text': '集体全资'
},
{
  'value': '130',
  'text': '股份合作'
},
{
  'value': '140',
  'text': '联营'
},
{
  'value': '141',
  'text': '国有联营'
},
{
  'value': '142',
  'text': '集体联营'
},
{
  'value': '143',
  'text': '国有与集体联营'
},
{
  'value': '149',
  'text': '其他联营'
},
{
  'value': '150',
  'text': '有限责任（公司）'
},
{
  'value': '151',
  'text': '国有独资（公司）'
},
{
  'value': '159',
  'text': '其他有限责任（公司）'
},
{
  'value': '160',
  'text': '股份有限（公司）'
},
{
  'value': '170',
  'text': '私有'
},
{
  'value': '171',
  'text': '私有独资'
},
{
  'value': '172',
  'text': '私有合伙'
},
{
  'value': '173',
  'text': '私营有限责任（公司）'
},
{
  'value': '174',
  'text': '私营股份有限（公司）'
},
{
  'value': '175',
  'text': '个体经营'
},
{
  'value': '179',
  'text': '其他私有'
},
{
  'value': '190',
  'text': '其他内资'
},
{
  'value': '200',
  'text': '港、澳、台投资'
},
{
  'value': '210',
  'text': '内地和港、澳、台合资'
},
{
  'value': '220',
  'text': '内地和港、澳、台合作'
},
{
  'value': '230',
  'text': '港、澳、台独资'
},
{
  'value': '240',
  'text': '港、澳、台投资股份有限（公司）'
},
{
  'value': '290',
  'text': '其他港、澳、台投资'
},
{
  'value': '300',
  'text': '国外投资'
},
{
  'value': '310',
  'text': '中外合资'
},
{
  'value': '320',
  'text': '中外合作'
},
{
  'value': '330',
  'text': '外资'
},
{
  'value': '340',
  'text': '国外投资股份有限（公司）'
},
{
  'value': '390',
  'text': '其他国外投资'
},
{
  'value': '900',
  'text': '其他'
}
]
const certTypeFace = [{
  'value': '01',
  'text': '居民身份证'
},
{
  'value': '02',
  'text': '港澳居民来往内地通行证'
},
{
  'value': '03',
  'text': '台湾居民来往大陆通行证'
},
{
  'value': '04',
  'text': '护照'
},
{
  'value': '05',
  'text': '军官证'
}]
const chiefCertTypeData = [{
  'value': '01',
  'text': '居民身份证'
},
{
  'value': '02',
  'text': '中国人民解放军军官证'
},
{
  'value': '03',
  'text': '中国人民武装警察警官证'
},
{
  'value': '04',
  'text': '香港特区护照/港澳居民来往内地通行证'
},
{
  'value': '05',
  'text': '澳门特区护照/港澳居民来往内地通行证'
},
{
  'value': '06',
  'text': '台湾居民来往大陆通行证'
},
{
  'value': '07',
  'text': '外国人永久居留证'
},
{
  'value': '08',
  'text': '外国人护照'
},
{
  'value': '16',
  'text': '港澳台居民居住证'
}
]
const specialUnitData = [{
  'value': '1',
  'text': '特困企业'
},
{
  'value': '2',
  'text': '行业统筹企业'
},
{
  'value': '9',
  'text': '其他'
}
]
const extraStaffData = [
  { 'value': '1', 'text': '存在' },
  { 'value': '0', 'text': '不存在' }
]
const technicalPositionData = [
  {
    'value': '411',
    'text': '正高级'
  },
  {
    'value': '412',
    'text': '副高级'
  }
]
const awardlevelData = [
  { 'value': '03', 'text': '特、一、二等' },
  { 'value': '04', 'text': '三、四等' },
  { 'value': '05', 'text': '省部级奖' }
]
const isWorkData = [{ 'value': '1', 'text': '一级' }]

const highestHonorCode2Data = [
  { 'value': '03', 'text': '特、一、二等' },
  { 'value': '04', 'text': '三、四等' },
  { 'value': '05', 'text': '省部级奖' }
]
const subjectRelationData = [{
  'value': '10',
  'text': '中央'
},
{
  'value': '20',
  'text': '省'
},
{
  'value': '40',
  'text': '市、地区'
},
{
  'value': '50',
  'text': '县（区）'
},
{
  'value': '51',
  'text': '区'
},
{
  'value': '52',
  'text': '县'
},
{
  'value': '60',
  'text': '街道、镇、乡'
},
{
  'value': '61',
  'text': '街道'
},
{
  'value': '62',
  'text': '镇'
},
{
  'value': '63',
  'text': '乡'
},
{
  'value': '70',
  'text': '居民、村民委员会'
},
{
  'value': '71',
  'text': '居民委员会'
},
{
  'value': '72',
  'text': '村民委员会'
},
{
  'value': '80',
  'text': '军队'
},
{
  'value': '90',
  'text': '其他'
}
]
// 学历
const educationData = [{
  'value': '11',
  'text': '博士研究生'
},
{
  'value': '14',
  'text': '硕士研究生'
},
{
  'value': '21',
  'text': '大学本科'
},
{
  'value': '31',
  'text': '大学专科'
},
{
  'value': '41',
  'text': '中等专科'
},
{
  'value': '44',
  'text': '职业高中'
},
{
  'value': '47',
  'text': '技工学校'
},
{
  'value': '61',
  'text': '普通中学'
},
{
  'value': '71',
  'text': '初级中学'
},
{
  'value': '81',
  'text': '小学'
},
{
  'value': '90',
  'text': '其他'
}
]
// 民族
const nationData = [
  { 'value': '01', 'text': '汉族' },
  { 'value': '02', 'text': '蒙古族' },
  { 'value': '03', 'text': '回族' },
  { 'value': '04', 'text': '藏族' },
  { 'value': '05', 'text': '维吾尔族' },
  { 'value': '06', 'text': '苗族' },
  { 'value': '07', 'text': '彝族' },
  { 'value': '08', 'text': '壮族' },
  { 'value': '09', 'text': '布依族' },
  { 'value': '10', 'text': '朝鲜族' },
  { 'value': '11', 'text': '满族' },
  { 'value': '12', 'text': '侗族' },
  { 'value': '13', 'text': '瑶族' },
  { 'value': '14', 'text': '白族' },
  { 'value': '15', 'text': '土家族' },
  { 'value': '16', 'text': '哈尼族' },
  { 'value': '17', 'text': '哈萨克族' },
  { 'value': '18', 'text': '傣族' },
  { 'value': '19', 'text': '黎族' },
  { 'value': '20', 'text': '傈僳族' },
  { 'value': '21', 'text': '佤族' },
  { 'value': '22', 'text': '畲族' },
  { 'value': '23', 'text': '高山族' },
  { 'value': '24', 'text': '拉祜族' },
  { 'value': '25', 'text': '水族' },
  { 'value': '26', 'text': '东乡族' },
  { 'value': '27', 'text': '纳西族' },
  { 'value': '28', 'text': '景颇族' },
  { 'value': '29', 'text': '柯尔克孜族' },
  { 'value': '30', 'text': '土族' },
  { 'value': '31', 'text': '达斡尔族' },
  { 'value': '32', 'text': '仫佬族' },
  { 'value': '33', 'text': '羌族' },
  { 'value': '34', 'text': '布朗族' },
  { 'value': '35', 'text': '撒拉族' },
  { 'value': '36', 'text': '毛南族' },
  { 'value': '37', 'text': '仡佬族' },
  { 'value': '38', 'text': '锡伯族' },
  { 'value': '39', 'text': '阿昌族' },
  { 'value': '40', 'text': '普米族' },
  { 'value': '41', 'text': '塔吉克族' },
  { 'value': '42', 'text': '怒族' },
  { 'value': '43', 'text': '乌孜别克族' },
  { 'value': '44', 'text': '俄罗斯族' },
  { 'value': '45', 'text': '鄂温克族' },
  { 'value': '46', 'text': '德昂族' },
  { 'value': '47', 'text': '保安族' },
  { 'value': '48', 'text': '裕固族' },
  { 'value': '49', 'text': '京族' },
  { 'value': '50', 'text': '塔塔尔族' },
  { 'value': '51', 'text': '独龙族' },
  { 'value': '52', 'text': '鄂伦春族' },
  { 'value': '53', 'text': '赫哲族' },
  { 'value': '54', 'text': '门巴族' },
  { 'value': '55', 'text': '珞巴族' },
  { 'value': '56', 'text': '基诺族' },
  { 'value': '99', 'text': '其他' }
]
// 辅助器具项目
const assistiveDevicesItemIDData = [{
  'value': '10001',
  'text': ' 假手指'
},
{
  'value': '10002',
  'text': ' 部分手假肢'
},
{
  'value': '10003',
  'text': '装饰性腕离断假肢'
},
{
  'value': '10004',
  'text': '索控式腕离断假肢'
},
{
  'value': '10005',
  'text': '装饰性前臂假肢'
},
{
  'value': '10006',
  'text': '索控式前臂假肢'
},
{
  'value': '10007',
  'text': '前臂肌电假肢'
},
{
  'value': '10008',
  'text': '装饰性肘离断假肢'
},
{
  'value': '10009',
  'text': '索控式肘离断假肢'
},
{
  'value': '10010',
  'text': '装饰性上臂假肢'
},
{
  'value': '10011',
  'text': '索控式上臂假肢'
},
{
  'value': '10012',
  'text': '装饰性肩离断假肢'
},
{
  'value': '10013',
  'text': ' 部分足假肢'
},
{
  'value': '10014',
  'text': '赛姆假肢'
},
{
  'value': '10015',
  'text': '组件式小腿假肢'
},
{
  'value': '10016',
  'text': '组件式膝离断假肢'
},
{
  'value': '10017',
  'text': '组件式大腿假肢'
},
{
  'value': '10018',
  'text': '组件式髋离断假肢'
},
{
  'value': '20001',
  'text': ' 静态型手指矫形器'
},
{
  'value': '20002',
  'text': '动态型手指矫形器'
},
{
  'value': '20003',
  'text': '静态型掌指矫形器'
},
{
  'value': '20004',
  'text': '动态型掌指矫形器'
},
{
  'value': '20005',
  'text': '静态型腕手矫形器'
},
{
  'value': '20006',
  'text': '动态型腕手矫形器'
},
{
  'value': '20007',
  'text': '前臂（肘腕手）矫形器'
},
{
  'value': '20008',
  'text': '上臂（肩肘）矫形器'
},
{
  'value': '20009',
  'text': '肩外展矫形器'
},
{
  'value': '20010',
  'text': '颈托'
},
{
  'value': '20011',
  'text': '颈胸矫形器'
},
{
  'value': '20012',
  'text': '胸腰骶矫形器'
},
{
  'value': '20013',
  'text': ' 脊柱过伸矫形器'
},
{
  'value': '20014',
  'text': '硬性围腰'
},
{
  'value': '20015',
  'text': '弹性围腰'
},
{
  'value': '20016',
  'text': ' 矫形鞋'
},
{
  'value': '20017',
  'text': '固定式踝足矫形器'
},
{
  'value': '20018',
  'text': '功能式踝足矫形器'
},
{
  'value': '20019',
  'text': ' 膝踝足矫形器'
},
{
  'value': '20020',
  'text': ' 膝矫形器'
},
{
  'value': '20021',
  'text': '髋膝踝足免荷式矫形器'
},
{
  'value': '30001',
  'text': '坐便椅'
},
{
  'value': '30002',
  'text': '腋杖'
},
{
  'value': '30003',
  'text': '肘杖'
},
{
  'value': '30004',
  'text': '手杖'
},
{
  'value': '30005',
  'text': '框式助行器'
},
{
  'value': '30006',
  'text': '轮式助行器'
},
{
  'value': '30007',
  'text': '普通轮椅'
},
{
  'value': '30008',
  'text': '高靠背轮椅'
},
{
  'value': '30009',
  'text': '手摇三轮车'
},
{
  'value': '30010',
  'text': '盲杖'
},
{
  'value': '40001',
  'text': ' 耳背式助听器'
},
{
  'value': '40002',
  'text': ' 耳内式助听器'
},
{
  'value': '40003',
  'text': ' 耳道式助听器'
},
{
  'value': '40004',
  'text': '光学助视器'
},
{
  'value': '40005',
  'text': ' 假眼'
},
{
  'value': '40006',
  'text': ' 假鼻'
},
{
  'value': '40007',
  'text': ' 假耳'
},
{
  'value': '40008',
  'text': ' 假乳房'
},
{
  'value': '40009',
  'text': '假发'
},
{
  'value': '40010',
  'text': '全口假牙'
},
{
  'value': '40011',
  'text': '半口假牙'
}
]
// 国籍
const countryData = [
  {
    'value': 'CHN',
    'text': '中国'
  },
  {
    'value': 'ABW',
    'text': '阿鲁巴岛'
  },
  {
    'value': 'AFG',
    'text': '阿富汗'
  },
  {
    'value': 'AGO',
    'text': '安哥拉'
  },
  {
    'value': 'AIA',
    'text': '安圭拉'
  },
  {
    'value': 'ALA',
    'text': '奥兰群岛'
  },
  {
    'value': 'ALB',
    'text': '阿尔巴尼亚'
  },
  {
    'value': 'AND',
    'text': '安道尔'
  },
  {
    'value': 'ANT',
    'text': '荷属安地列斯群岛'
  },
  {
    'value': 'ARE',
    'text': '阿拉伯联合酋长国'
  },
  {
    'value': 'ARG',
    'text': '阿根廷'
  },
  {
    'value': 'ARM',
    'text': '亚美尼亚'
  },
  {
    'value': 'ASM',
    'text': '美属萨摩亚'
  },
  {
    'value': 'ATA',
    'text': '南极洲'
  },
  {
    'value': 'ATF',
    'text': '法属南部领地'
  },
  {
    'value': 'ATG',
    'text': '安提瓜岛与巴布达岛'
  },
  {
    'value': 'AUS',
    'text': '澳大利亚'
  },
  {
    'value': 'AUT',
    'text': '奥地利'
  },
  {
    'value': 'AZE',
    'text': '阿塞拜疆'
  },
  {
    'value': 'BDI',
    'text': '布隆迪'
  },
  {
    'value': 'BEL',
    'text': '比利时'
  },
  {
    'value': 'BEN',
    'text': '贝宁'
  },
  {
    'value': 'BFA',
    'text': '布基纳法索'
  },
  {
    'value': 'BGD',
    'text': '孟加拉国'
  },
  {
    'value': 'BGR',
    'text': '保加利亚'
  },
  {
    'value': 'BHR',
    'text': '巴林群岛'
  },
  {
    'value': 'BHS',
    'text': '巴哈马群岛'
  },
  {
    'value': 'BIH',
    'text': '波斯尼亚与黑塞哥维那'
  },
  {
    'value': 'BLR',
    'text': '白俄罗斯'
  },
  {
    'value': 'BLZ',
    'text': '伯利兹'
  },
  {
    'value': 'BMU',
    'text': '百慕大群岛'
  },
  {
    'value': 'BOL',
    'text': '玻利维亚'
  },
  {
    'value': 'BRA',
    'text': '巴西'
  },
  {
    'value': 'BRB',
    'text': '巴巴多斯岛'
  },
  {
    'value': 'BRN',
    'text': '文莱'
  },
  {
    'value': 'BTN',
    'text': '不丹'
  },
  {
    'value': 'BVT',
    'text': '博维特岛'
  },
  {
    'value': 'BWA',
    'text': '博茨瓦纳'
  },
  {
    'value': 'CAF',
    'text': '中非共和国'
  },
  {
    'value': 'CAN',
    'text': '加拿大'
  },
  {
    'value': 'CCK',
    'text': '科科斯群岛'
  },
  {
    'value': 'CHE',
    'text': '瑞士'
  },
  {
    'value': 'CHL',
    'text': '智利'
  },
  {
    'value': 'CIV',
    'text': '科特迪瓦'
  },
  {
    'value': 'CMR',
    'text': '喀麦隆'
  },
  {
    'value': 'COD',
    'text': '刚果（金）'
  },
  {
    'value': 'COG',
    'text': '刚果'
  },
  {
    'value': 'COK',
    'text': '库克群岛'
  },
  {
    'value': 'COL',
    'text': '哥伦比亚'
  },
  {
    'value': 'COM',
    'text': '科摩罗'
  },
  {
    'value': 'CPV',
    'text': '佛得角'
  },
  {
    'value': 'CRI',
    'text': '哥斯达黎加'
  },
  {
    'value': 'CUB',
    'text': '古巴'
  },
  {
    'value': 'CXR',
    'text': '圣诞岛'
  },
  {
    'value': 'CYM',
    'text': '开曼群岛'
  },
  {
    'value': 'CYP',
    'text': '塞浦路斯'
  },
  {
    'value': 'CZE',
    'text': '捷克共和国'
  },
  {
    'value': 'DEU',
    'text': '德国'
  },
  {
    'value': 'DJI',
    'text': '吉布提'
  },
  {
    'value': 'DMA',
    'text': '多米尼加'
  },
  {
    'value': 'DNK',
    'text': '丹麦'
  },
  {
    'value': 'DOM',
    'text': '多米尼加共和国'
  },
  {
    'value': 'DZA',
    'text': '阿尔及尔'
  },
  {
    'value': 'ECU',
    'text': '厄瓜多尔'
  },
  {
    'value': 'EGY',
    'text': '埃及'
  },
  {
    'value': 'ERI',
    'text': '厄立特里亚'
  },
  {
    'value': 'ESH',
    'text': '西撒哈拉'
  },
  {
    'value': 'ESP',
    'text': '西班牙'
  },
  {
    'value': 'EST',
    'text': '爱沙尼亚'
  },
  {
    'value': 'ETH',
    'text': '埃塞俄比亚'
  },
  {
    'value': 'FIN',
    'text': '芬兰'
  },
  {
    'value': 'FJI',
    'text': '斐济'
  },
  {
    'value': 'FRA',
    'text': '法国'
  },
  {
    'value': 'FRO',
    'text': '法罗群岛'
  },
  {
    'value': 'FSM',
    'text': '密克罗尼西亚'
  },
  {
    'value': 'GAB',
    'text': '加蓬'
  },
  {
    'value': 'GBR',
    'text': '英国'
  },
  {
    'value': 'GEO',
    'text': '乔治亚州'
  },
  {
    'value': 'GGY',
    'text': '格恩西岛'
  },
  {
    'value': 'GHA',
    'text': '加纳'
  },
  {
    'value': 'GIB',
    'text': '直布罗陀'
  },
  {
    'value': 'GIN',
    'text': '几内亚'
  },
  {
    'value': 'GLP',
    'text': '瓜德罗普岛'
  },
  {
    'value': 'GMB',
    'text': '冈比亚'
  },
  {
    'value': 'GNB',
    'text': '几内亚比绍'
  },
  {
    'value': 'GNQ',
    'text': '赤道几内亚'
  },
  {
    'value': 'GRC',
    'text': '希腊'
  },
  {
    'value': 'GRD',
    'text': '格林纳达'
  },
  {
    'value': 'GRL',
    'text': '格陵兰'
  },
  {
    'value': 'GTM',
    'text': '危地马拉'
  },
  {
    'value': 'GUF',
    'text': '法属圭亚那'
  },
  {
    'value': 'GUM',
    'text': '关岛'
  },
  {
    'value': 'GUY',
    'text': '圭亚那'
  },
  {
    'value': 'HKG',
    'text': '中国香港'
  },
  {
    'value': 'HMD',
    'text': '赫德和麦克唐纳群岛'
  },
  {
    'value': 'HND',
    'text': '洪都拉斯'
  },
  {
    'value': 'HRV',
    'text': '克罗地亚'
  },
  {
    'value': 'HTI',
    'text': '海地'
  },
  {
    'value': 'HUN',
    'text': '匈牙利'
  },
  {
    'value': 'IDN',
    'text': '印度尼西亚'
  },
  {
    'value': 'IMN',
    'text': '曼恩岛'
  },
  {
    'value': 'IND',
    'text': '印度'
  },
  {
    'value': 'IOT',
    'text': '英属印度洋领地'
  },
  {
    'value': 'IRL',
    'text': '爱尔兰'
  },
  {
    'value': 'IRN',
    'text': '伊朗'
  },
  {
    'value': 'IRQ',
    'text': '伊拉克'
  },
  {
    'value': 'ISL',
    'text': '冰岛'
  },
  {
    'value': 'ISR',
    'text': '以色列'
  },
  {
    'value': 'ITA',
    'text': '意大利'
  },
  {
    'value': 'JAM',
    'text': '牙买加'
  },
  {
    'value': 'JEY',
    'text': '泽西岛'
  },
  {
    'value': 'JOR',
    'text': '约旦'
  },
  {
    'value': 'JPN',
    'text': '日本'
  },
  {
    'value': 'KAZ',
    'text': '哈萨克斯坦'
  },
  {
    'value': 'KEN',
    'text': '肯尼亚'
  },
  {
    'value': 'KGZ',
    'text': '吉尔吉斯斯坦'
  },
  {
    'value': 'KHM',
    'text': '柬埔寨'
  },
  {
    'value': 'KIR',
    'text': '基里巴斯'
  },
  {
    'value': 'KLK',
    'text': '福克兰群岛'
  },
  {
    'value': 'KNA',
    'text': '圣基茨和尼维斯'
  },
  {
    'value': 'KOR',
    'text': '韩国'
  },
  {
    'value': 'KWT',
    'text': '科威特'
  },
  {
    'value': 'LAO',
    'text': '老挝'
  },
  {
    'value': 'LBN',
    'text': '黎巴嫩'
  },
  {
    'value': 'LBR',
    'text': '利比里亚'
  },
  {
    'value': 'LBY',
    'text': '利比亚'
  },
  {
    'value': 'LCA',
    'text': '圣卢西亚岛'
  },
  {
    'value': 'LIE',
    'text': '列支敦士登'
  },
  {
    'value': 'LKA',
    'text': '斯里兰卡'
  },
  {
    'value': 'LSO',
    'text': '莱索托'
  },
  {
    'value': 'LTU',
    'text': '立陶宛'
  },
  {
    'value': 'LUX',
    'text': '卢森堡'
  },
  {
    'value': 'LVA',
    'text': '拉脱维亚'
  },
  {
    'value': 'MAC',
    'text': '中国澳门'
  },
  {
    'value': 'MAR',
    'text': '摩洛哥'
  },
  {
    'value': 'MCO',
    'text': '摩纳哥'
  },
  {
    'value': 'MDA',
    'text': '摩尔多瓦'
  },
  {
    'value': 'MDG',
    'text': '马达加斯加岛'
  },
  {
    'value': 'MDV',
    'text': '马尔代夫'
  },
  {
    'value': 'MEX',
    'text': '墨西哥'
  },
  {
    'value': 'MHL',
    'text': '马绍尔群岛'
  },
  {
    'value': 'MKD',
    'text': '马其顿'
  },
  {
    'value': 'MLI',
    'text': '马里'
  },
  {
    'value': 'MLT',
    'text': '马耳他'
  },
  {
    'value': 'MMR',
    'text': '缅甸'
  },
  {
    'value': 'MNE',
    'text': '黑山'
  },
  {
    'value': 'MNG',
    'text': '蒙古'
  },
  {
    'value': 'MNP',
    'text': '北马里亚纳群岛自由联邦'
  },
  {
    'value': 'MOZ',
    'text': '莫桑比克'
  },
  {
    'value': 'MRT',
    'text': '毛利塔尼亚'
  },
  {
    'value': 'MSR',
    'text': '蒙特塞拉特岛'
  },
  {
    'value': 'MTQ',
    'text': '马提尼克岛'
  },
  {
    'value': 'MUS',
    'text': '毛里求斯'
  },
  {
    'value': 'MWI',
    'text': '马拉维'
  },
  {
    'value': 'MYS',
    'text': '马来西亚'
  },
  {
    'value': 'MYT',
    'text': '马约特岛'
  },
  {
    'value': 'NAM',
    'text': '纳米比亚'
  },
  {
    'value': 'NCL',
    'text': '新喀里多尼亚'
  },
  {
    'value': 'NER',
    'text': '尼日尔'
  },
  {
    'value': 'NFK',
    'text': '诺福克岛'
  },
  {
    'value': 'NGA',
    'text': '尼日利亚'
  },
  {
    'value': 'NIC',
    'text': '尼加拉瓜'
  },
  {
    'value': 'NIU',
    'text': '纽埃岛'
  },
  {
    'value': 'NLD',
    'text': '荷兰'
  },
  {
    'value': 'NOR',
    'text': '挪威'
  },
  {
    'value': 'NPL',
    'text': '尼泊尔'
  },
  {
    'value': 'NRU',
    'text': '瑙鲁'
  },
  {
    'value': 'NZL',
    'text': '新西兰'
  },
  {
    'value': 'OMN',
    'text': '阿曼'
  },
  {
    'value': 'PAK',
    'text': '巴基斯坦'
  },
  {
    'value': 'PAN',
    'text': '巴拿马'
  },
  {
    'value': 'PCN',
    'text': '皮特克恩岛'
  },
  {
    'value': 'PER',
    'text': '秘鲁'
  },
  {
    'value': 'PHL',
    'text': '菲律宾'
  },
  {
    'value': 'PLW',
    'text': '帕劳岛'
  },
  {
    'value': 'PNG',
    'text': '巴布亚新几内亚'
  },
  {
    'value': 'POL',
    'text': '波兰'
  },
  {
    'value': 'PRI',
    'text': '波多黎各'
  },
  {
    'value': 'PRK',
    'text': '朝鲜'
  },
  {
    'value': 'PRT',
    'text': '葡萄牙'
  },
  {
    'value': 'PRY',
    'text': '巴拉圭'
  },
  {
    'value': 'PSE',
    'text': '巴勒斯坦'
  },
  {
    'value': 'PYF',
    'text': '法属波利尼西亚'
  },
  {
    'value': 'QAT',
    'text': '卡塔尔'
  },
  {
    'value': 'REU',
    'text': '留尼旺岛'
  },
  {
    'value': 'ROU',
    'text': '罗马尼亚'
  },
  {
    'value': 'RUS',
    'text': '俄国'
  },
  {
    'value': 'RWA',
    'text': '卢旺达'
  },
  {
    'value': 'SAU',
    'text': '沙特阿拉伯'
  },
  {
    'value': 'SDN',
    'text': '苏丹'
  },
  {
    'value': 'SEN',
    'text': '塞内加尔'
  },
  {
    'value': 'SGP',
    'text': '新加坡'
  },
  {
    'value': 'SGS',
    'text': '南乔治亚岛和南桑威奇群岛'
  },
  {
    'value': 'SHN',
    'text': '圣赫勒拿岛'
  },
  {
    'value': 'SJM',
    'text': '斯瓦尔巴岛和扬马延岛'
  },
  {
    'value': 'SLB',
    'text': '所罗门群岛'
  },
  {
    'value': 'SLE',
    'text': '塞拉利昂'
  },
  {
    'value': 'SLV',
    'text': '萨尔瓦多'
  },
  {
    'value': 'SMR',
    'text': '圣马力诺'
  },
  {
    'value': 'SOM',
    'text': '索马里'
  },
  {
    'value': 'SPM',
    'text': '圣皮埃尔和密克隆岛'
  },
  {
    'value': 'SRB',
    'text': '塞尔维亚和黑山'
  },
  {
    'value': 'STP',
    'text': '圣多美和普林西比'
  },
  {
    'value': 'SUR',
    'text': '苏里南'
  },
  {
    'value': 'SVK',
    'text': '斯洛伐克'
  },
  {
    'value': 'SVN',
    'text': '斯洛文尼亚'
  },
  {
    'value': 'SWE',
    'text': '瑞典'
  },
  {
    'value': 'SWZ',
    'text': '斯威士兰'
  },
  {
    'value': 'SYC',
    'text': '塞舌尔'
  },
  {
    'value': 'SYR',
    'text': '叙利亚'
  },
  {
    'value': 'TCA',
    'text': '特克斯和凯科斯群岛'
  },
  {
    'value': 'TCD',
    'text': '乍得'
  },
  {
    'value': 'TGO',
    'text': '多哥'
  },
  {
    'value': 'THA',
    'text': '泰国'
  },
  {
    'value': 'TJK',
    'text': '塔吉克斯坦'
  },
  {
    'value': 'TKL',
    'text': '托克劳群岛'
  },
  {
    'value': 'TKM',
    'text': '土库曼斯坦'
  },
  {
    'value': 'TLS',
    'text': '东帝汶'
  },
  {
    'value': 'TON',
    'text': '汤加'
  },
  {
    'value': 'TTO',
    'text': '特立尼达和多巴哥'
  },
  {
    'value': 'TUN',
    'text': '突尼斯'
  },
  {
    'value': 'TUR',
    'text': '土耳其'
  },
  {
    'value': 'TUV',
    'text': '图瓦卢'
  },
  {
    'value': 'TWN',
    'text': '中国台湾'
  },
  {
    'value': 'TZA',
    'text': '坦桑尼亚'
  },
  {
    'value': 'UGA',
    'text': '乌干达'
  },
  {
    'value': 'UKR',
    'text': '乌克兰'
  },
  {
    'value': 'UMI',
    'text': '美属萨摩亚'
  },
  {
    'value': 'URY',
    'text': '乌拉圭'
  },
  {
    'value': 'USA',
    'text': '美国'
  },
  {
    'value': 'UZB',
    'text': '乌兹别克斯坦'
  },
  {
    'value': 'VAT',
    'text': '梵蒂冈'
  },
  {
    'value': 'VCT',
    'text': '圣文森特和格林纳丁斯群岛'
  },
  {
    'value': 'VEN',
    'text': '委内瑞拉'
  },
  {
    'value': 'VGB',
    'text': '维尔京群岛（英属）'
  },
  {
    'value': 'VIR',
    'text': '维尔京群岛（美属）'
  },
  {
    'value': 'VNM',
    'text': '越南'
  },
  {
    'value': 'VUT',
    'text': '瓦努阿图'
  },
  {
    'value': 'WLF',
    'text': '瓦利斯群岛和富图纳群岛'
  },
  {
    'value': 'WSM',
    'text': '萨摩亚群岛'
  },
  {
    'value': 'YEM',
    'text': '也门'
  },
  {
    'value': 'ZAF',
    'text': '南非'
  },
  {
    'value': 'ZMB',
    'text': '赞比亚'
  },
  {
    'value': 'ZWE',
    'text': '津巴布韦'
  }
]
const retireStatusData = [
  {
    'value': '0',
    'text': '在职'
  },
  {
    'value': '1',
    'text': '离退休'
  },
  {
    'value': '2',
    'text': '在职转退休'
  },
  {
    'value': '3',
    'text': '供养'
  },
  {
    'value': '4',
    'text': '精简'
  },
]
const cognizanceConclusionData = [
  {
    'value': '1',
    'text': '工伤'
  },
  {
    'value': '2',
    'text': '视同工伤'
  },
  {
    'value': '3',
    'text': '不属于工伤'
  },
  {
    'value': '4',
    'text': '不视同工伤'
  },
  {
    'value': '5',
    'text': '因公死亡'
  },
  {
    'value': '6',
    'text': '职业病'
  }
]
const diseasesNameData = [
  {
    'value': '0100',
    'text': '尘肺'
  },
  {
    'value': '0101',
    'text': '矽肺'
  },
  {
    'value': '0102',
    'text': '煤工尘肺'
  },
  {
    'value': '0103',
    'text': '石墨尘肺'
  },
  {
    'value': '0104',
    'text': '碳黑尘肺'
  },
  {
    'value': '0105',
    'text': '石棉肺'
  },
  {
    'value': '0106',
    'text': '滑石尘肺'
  },
  {
    'value': '0107',
    'text': '水泥尘肺'
  },
  {
    'value': '0108',
    'text': '云母尘肺'
  },
  {
    'value': '0109',
    'text': '陶工尘肺'
  },
  {
    'value': '0110',
    'text': '铝尘肺'
  },
  {
    'value': '0111',
    'text': '电焊工尘肺'
  },
  {
    'value': '0112',
    'text': '铸工尘肺'
  },
  {
    'value': '0113',
    'text': '根据《尘肺病诊断标准》和《尘肺病理诊断标准》可以诊断的其他尘肺'
  },
  {
    'value': '0200',
    'text': '职业性放射性疾病'
  },
  {
    'value': '0201',
    'text': '外照射急性放射病'
  },
  {
    'value': '0202',
    'text': '外照射亚急性放射病'
  },
  {
    'value': '0203',
    'text': '外照射慢性放射病'
  },
  {
    'value': '0204',
    'text': '内照射放射病'
  },
  {
    'value': '0205',
    'text': '放射性皮肤疾病'
  },
  {
    'value': '0206',
    'text': '放射性肿瘤'
  },
  {
    'value': '0207',
    'text': '放射性骨损伤'
  },
  {
    'value': '0208',
    'text': '放射性甲状腺疾病'
  },
  {
    'value': '0209',
    'text': '放射性性腺疾病'
  },
  {
    'value': '0210',
    'text': '放射复合伤'
  },
  {
    'value': '0211',
    'text': '根据《职业性放射性疾病诊断标准（总则）》可以诊断的其他放射性损伤'
  },
  {
    'value': '0300',
    'text': '职业中毒'
  },
  {
    'value': '0301',
    'text': '铅及其化合物中毒（不包括四乙基铅）'
  },
  {
    'value': '0302',
    'text': '汞及其化合物中毒'
  },
  {
    'value': '0303',
    'text': '锰及其化合物中毒'
  },
  {
    'value': '0304',
    'text': '镉及其化合物中毒'
  },
  {
    'value': '0305',
    'text': '铍病'
  },
  {
    'value': '0306',
    'text': '铊及其化合物中毒'
  },
  {
    'value': '0307',
    'text': '钡及其化合物中毒'
  },
  {
    'value': '0308',
    'text': '钒及其化合物中毒'
  },
  {
    'value': '0309',
    'text': '磷及其化合物中毒'
  },
  {
    'value': '0310',
    'text': '砷及其化合物中毒'
  },
  {
    'value': '0311',
    'text': '铀中毒'
  },
  {
    'value': '0312',
    'text': '砷化氢中毒'
  },
  {
    'value': '0313',
    'text': '氯气中毒'
  },
  {
    'value': '0314',
    'text': '二氧化硫中毒'
  },
  {
    'value': '0315',
    'text': '光气中毒'
  },
  {
    'value': '0316',
    'text': '氨中毒'
  },
  {
    'value': '0317',
    'text': '偏二甲基肼中毒'
  },
  {
    'value': '0318',
    'text': '氮氧化合物中毒'
  },
  {
    'value': '0319',
    'text': '一氧化碳中毒'
  },
  {
    'value': '0320',
    'text': '二硫化碳中毒'
  },
  {
    'value': '0321',
    'text': '硫化氢中毒'
  },
  {
    'value': '0322',
    'text': '磷化氢、磷化锌、磷化铝中毒'
  },
  {
    'value': '0323',
    'text': '工业性氟病'
  },
  {
    'value': '0324',
    'text': '氰及腈类化合物中毒'
  },
  {
    'value': '0325',
    'text': '四乙基铅中毒'
  },
  {
    'value': '0326',
    'text': '有机锡中毒'
  },
  {
    'value': '0327',
    'text': '羰基镍中毒'
  },
  {
    'value': '0328',
    'text': '苯中毒'
  },
  {
    'value': '0329',
    'text': '甲苯中毒'
  },
  {
    'value': '0330',
    'text': '二甲苯中毒'
  },
  {
    'value': '0331',
    'text': '正己烷中毒'
  },
  {
    'value': '0332',
    'text': '汽油中毒'
  },
  {
    'value': '0333',
    'text': '一甲胺中毒'
  },
  {
    'value': '0334',
    'text': '有机氟聚合物单体及其热裂解物中毒'
  },
  {
    'value': '0335',
    'text': '二氯乙烷中毒'
  },
  {
    'value': '0336',
    'text': '四氯化碳中毒'
  },
  {
    'value': '0337',
    'text': '氯乙烯中毒'
  },
  {
    'value': '0338',
    'text': '三氯乙烯中毒'
  },
  {
    'value': '0339',
    'text': '氯丙烯中毒'
  },
  {
    'value': '0340',
    'text': '氯丁二烯中毒'
  },
  {
    'value': '0341',
    'text': '苯的氨基及硝基化合物（不包括三硝基甲苯）中毒'
  },
  {
    'value': '0342',
    'text': '三硝基甲苯中毒'
  },
  {
    'value': '0343',
    'text': '甲醇中毒'
  },
  {
    'value': '0344',
    'text': '酚中毒'
  },
  {
    'value': '0345',
    'text': '五氯酚（钠）中毒'
  },
  {
    'value': '0346',
    'text': '甲醛中毒'
  },
  {
    'value': '0347',
    'text': '硫酸二甲酯中毒'
  },
  {
    'value': '0348',
    'text': '丙烯酰胺中毒'
  },
  {
    'value': '0349',
    'text': '二甲基甲酰胺中毒'
  },
  {
    'value': '0350',
    'text': '有机磷农药中毒'
  },
  {
    'value': '0351',
    'text': '氨基甲酸酯类农药中毒'
  },
  {
    'value': '0352',
    'text': '杀虫脒中毒'
  },
  {
    'value': '0353',
    'text': '溴甲烷中毒'
  },
  {
    'value': '0354',
    'text': '拟除虫菊酯类农药中毒'
  },
  {
    'value': '0355',
    'text': '根据《职业性中毒性肝病诊断标准》可以诊断的职业性中毒性肝病'
  },
  {
    'value': '0356',
    'text': '根据《职业性急性化学物中毒诊断标准（总则）》可以诊断的其他职业性急性中毒'
  },
  {
    'value': '0400',
    'text': '物理因素所致职业病'
  },
  {
    'value': '0401',
    'text': '中暑'
  },
  {
    'value': '0402',
    'text': '减压病'
  },
  {
    'value': '0403',
    'text': '高原病'
  },
  {
    'value': '0404',
    'text': '航空病'
  },
  {
    'value': '0405',
    'text': '手臂振动病'
  },
  {
    'value': '0500',
    'text': '生物因素所致职业病'
  },
  {
    'value': '0501',
    'text': '炭疽'
  },
  {
    'value': '0502',
    'text': '森林脑炎'
  },
  {
    'value': '0503',
    'text': '布氏杆菌病'
  },
  {
    'value': '0600',
    'text': '职业性皮肤病'
  },
  {
    'value': '0601',
    'text': '接触性皮炎'
  },
  {
    'value': '0602',
    'text': '光敏性皮炎'
  },
  {
    'value': '0603',
    'text': '电光性皮炎'
  },
  {
    'value': '0604',
    'text': '黑变病'
  },
  {
    'value': '0605',
    'text': '痤疮'
  },
  {
    'value': '0606',
    'text': '溃疡'
  },
  {
    'value': '0607',
    'text': '化学性皮肤灼伤'
  },
  {
    'value': '0608',
    'text': '根据《职业性皮肤病诊断标准（总则）》可以诊断的其他职业性皮肤病'
  },
  {
    'value': '0700',
    'text': '职业性眼病'
  },
  {
    'value': '0701',
    'text': '化学性眼部灼伤'
  },
  {
    'value': '0702',
    'text': '电光性眼炎'
  },
  {
    'value': '0703',
    'text': '职业性白内障（含放射性白内障、三硝基甲苯白内障）'
  },
  {
    'value': '0800',
    'text': '职业性耳鼻喉口腔疾病'
  },
  {
    'value': '0801',
    'text': '噪声聋'
  },
  {
    'value': '0802',
    'text': '铬鼻病'
  },
  {
    'value': '0803',
    'text': '牙酸蚀病'
  },
  {
    'value': '0900',
    'text': '职业性肿瘤'
  },
  {
    'value': '0901',
    'text': '石棉所致肺癌、间皮瘤'
  },
  {
    'value': '0902',
    'text': '联苯胺所致膀胱癌'
  },
  {
    'value': '0903',
    'text': '苯所致白血病'
  },
  {
    'value': '0904',
    'text': '氯甲醚所致肺癌'
  },
  {
    'value': '0905',
    'text': '砷所致肺癌、皮肤癌'
  },
  {
    'value': '0906',
    'text': '氯乙烯所致肝血管肉瘤'
  },
  {
    'value': '0907',
    'text': '焦炉工人肺癌'
  },
  {
    'value': '0908',
    'text': '铬酸盐制造业工人肺癌'
  },
  {
    'value': '1000',
    'text': '其他职业病'
  },
  {
    'value': '1001',
    'text': '金属烟热'
  },
  {
    'value': '1002',
    'text': '职业性哮喘'
  },
  {
    'value': '1003',
    'text': '职业性变态反应性肺泡炎'
  },
  {
    'value': '1004',
    'text': '棉尘病'
  },
  {
    'value': '1005',
    'text': '煤矿井下工人滑囊炎'
  }
]
const injuryLevelData = [
  {
    'value': '01',
    'text': '伤残一级'
  },
  {
    'value': '02',
    'text': '伤残二级'
  },
  {
    'value': '03',
    'text': '伤残三级'
  },
  {
    'value': '04',
    'text': '伤残四级'
  },
  {
    'value': '05',
    'text': '伤残五级'
  },
  {
    'value': '06',
    'text': '伤残六级'
  },
  {
    'value': '07',
    'text': '伤残七级'
  },
  {
    'value': '08',
    'text': '伤残八级'
  },
  {
    'value': '09',
    'text': '伤残九级'
  },
  {
    'value': '10',
    'text': '伤残十级'
  },
  {
    'value': '11',
    'text': '未达等级'
  }
]
const selfcareDisorderLevelData = [
  {
    'value': '1',
    'text': '生活完全不能自理'
  },
  {
    'value': '2',
    'text': '生活大部分不能自理'
  },
  {
    'value': '3',
    'text': '生活部分不能自理'
  },
  {
    'value': '4',
    'text': '未达等级'
  }
]
const oldInjuryFlagData = [
  {
    'value': '0',
    'text': '否'
  },
  {
    'value': '1',
    'text': '是'
  }
]
const isThirdPersonData = [
  {
    'value': '1',
    'text': '是'
  },
  {
    'value': '0',
    'text': '否'
  }
]
//  参保险种
const insuranceTypeData = [
  {
    'value': '1',
    'text': '基本养老保险'
  },
  {
    'value': '2',
    'text': '失业保险'
  },
  {
    'value': '3',
    'text': '工伤保险'
  }
]
//  参保险种
const insuranceTypeDataTwo = [
  {
    'value': '110',
    'text': '基本养老保险'
  }
]
//  费率档次
const rateLevelData = [
  {
    'value': '1',
    'text': '2019年度基本养老保险'
  }
]
//特殊养老保险待遇核准支付
const specialTreatmentType = [
  {
    'value': '01',
    'text': '高级专家'
  },
  {
    'value': '02',
    'text': '高级职称'
  },  {
    'value': '03',
    'text': '高级技师'
  },  {
    'value': '04',
    'text': '劳模'
  },  {
    'value': '05',
    'text': '归桥职工'
  },  {
    'value': '06',
    'text': '特殊工种'
  },  {
    'value': '07',
    'text': '海拔'
  }
]
//终止原因
const stopReason = [
  {
    'value': '6402',
    'text': '出国定居'
  },
  {
    'value': '6311',
    'text': '退保'
  },
  {
    'value': '4401',
    'text': '在职死亡'
  }
]
// 参保身份
const insuredGroup = [
  {
    'value': '401',
    'text': '普通人员'
  }
]
// 暂停原因
// 参保身份
const reason = [
  {
    'value': '人员中断缴费',
    'key': '6300'
  },
  {
    'value': '生存证明未报',
    'key': '6312'
  }
]
// 补缴类型
const payType = [
  {
    'value': '2000',
    'text': '人员缴费'
  },
  {
    'value': '2900',
    'text': '人员一次性缴费'
  }
]
/**
 * 灵活就业基数比例
 */
const baseRatioDate = [
  {
    'value': '0',
    'text': '保底'
  },
  {
    'value': '1',
    'text': '80%'
  },
  {
    'value': '2',
    'text': '100%'
  },
  {
    'value': '3',
    'text': '200%'
  },
  {
    'value': '4',
    'text': '封顶（300%）'
  },
  {
    'value': '5',
    'text': '自定义'
  }
]
const injurySiteData = [
  {
    'value': '颅脑',
    'key': '010'
  },
  {
    'value': '脑',
    'key': '011'
  },
  {
    'value': '颅骨',
    'key': '012'
  },
  {
    'value': '头皮',
    'key': '013'
  },
  {
    'value': '面颌部',
    'key': '020'
  },
  {
    'value': '眼部',
    'key': '030'
  },
  {
    'value': '鼻',
    'key': '040'
  },
  {
    'value': '耳',
    'key': '050'
  },
  {
    'value': '口',
    'key': '060'
  },
  {
    'value': '颈部',
    'key': '070'
  },
  {
    'value': '胸部',
    'key': '080'
  },
  {
    'value': '腹部',
    'key': '090'
  },
  {
    'value': '腰部',
    'key': '100'
  },
  {
    'value': '脊柱',
    'key': '110'
  },
  {
    'value': '上肢',
    'key': '120'
  },
  {
    'value': '肩胛部',
    'key': '121'
  },
  {
    'value': '上臂',
    'key': '122'
  },
  {
    'value': '肘部',
    'key': '123'
  },
  {
    'value': '前臂',
    'key': '124'
  },
  {
    'value': '腕及手',
    'key': '130'
  },
  {
    'value': ' 腕',
    'key': '131'
  },
  {
    'value': '掌',
    'key': '132'
  },
  {
    'value': '指',
    'key': '133'
  },
  {
    'value': '下肢',
    'key': '140'
  },
  {
    'value': '髋部',
    'key': '141'
  },
  {
    'value': '股骨',
    'key': '142'
  },
  {
    'value': '膝部',
    'key': '143'
  },
  {
    'value': '小腿',
    'key': '144'
  },
  {
    'value': '踝及脚',
    'key': '150'
  },
  {
    'value': '踝部',
    'key': '151'
  },
  {
    'value': '跟部',
    'key': '152'
  },
  {
    'value': '蹠部（距骨、舟骨、蹠骨',
    'key': '153'
  },
  {
    'value': '趾',
    'key': '154'
  },
  {
    'value': '其他',
    'key': '999'
  }
]
// 是否受疫情影响
const affectedByEpidemic = [
  {
    'value': '0',
    'text': '否'
  },
  {
    'value': '1',
    'text': '是'
  }
]
// 转移账户类型
const transferAccountType = [
  {
    'value': '1',
    'text': '一般账户'
  },
  {
    'value': '2',
    'text': '临时缴费账户'
  }
]

// const reason = [
//   {
//     value: '在职人员解除/终止劳动合同',
//     key: '6301'
//   },
//   {
//     value: '人员统筹范围内转出',
//     key: '6302'
//   },
//   {
//     value: '人员参军',
//     key: '6303'
//   },
//   {
//     value: '人员上学',
//     key: '6304'
//   },
//   {
//     value: '人员被判刑收监执行或被劳动教养',
//     key: '6305'
//   },
//   {
//     value: '人员失踪',
//     key: '6306'
//   },
//   {
//     value: '停薪留职',
//     key: '6307'
//   },
//   {
//     value: '人员达到享受养老待遇条件',
//     key: '6308'
//   },
//   {
//     value: '其他原因中断缴费',
//     key: '6399'
//   },
//   {
//     value: '辞职',
//     key: '6313'
//   },
//   {
//     value: '自动离职',
//     key: '6314'
//   },{
//     value: '除名',
//     key: '6315'
//   },
//   {
//     value: '开除',
//     key: '6316'
//   },
//   {
//     value: '被用人单位辞退',
//     key: '6317'
//   },
//   {
//     value: '终止创办企业、个体工商户、民办非企业等',
//     key: '6318'
//   },
//   {
//     value: '因劳动者意愿提出解除劳动合同或聘用合同（含与用人单位协商一致的）',
//     key: '6319'
//   },
//   {
//     value: '因用人单位违反劳动合同及相关法律、法规规定，劳动者提出解除劳动合同',
//     key: '6320'
//   },
//   {
//     value: '用人单位提出解除劳动合同（含与劳动者协商一致的）',
//     key: '6321'
//   },
//   {
//     value: '劳动合同期满终止',
//     key: '6322'
//   },
//   {
//     value: '用人单位依法宣告破产、被吊销营业执照、责令关闭或提前解散等其他原因',
//     key: '6323'
//   },
//   {
//     value: '死亡',
//     key: '6309'
//   },
//   {
//     value: '外国人离境',
//     key: '6310'
//   },
//   {
//     value: '到龄不符合退休条件',
//     key: '6311'
//   }
// ]
const yearList = []
const yearMax = new Date().getFullYear()
for (let year = 1960; year <= yearMax; year++) {
  yearList.unshift({
    'value': '${year}',
    'text': `${year}年`
  })
}

export default {
  receiptorRelation,
  stopReason,
  specialTreatmentType,
  rateLevelData,
  insuranceTypeData,
  incapacityData,
  orphansFlagData,
  drawerCertificateTypeData,
  isThirdPersonData,
  oldInjuryFlagData,
  selfcareDisorderLevelData,
  injuryLevelData,
  diseasesNameData,
  cognizanceConclusionData,
  sex,
  modelTypeData,
  awardlevelData,
  retireStatusData,
  assistiveDevicesItemIDData,
  subjectIndustryData,
  companyAdvanceData,
  issueModeData,
  economyTypeData,
  chiefCertTypeData,
  specialUnitData,
  extraStaffData,
  subjectRelationData,
  bankCodeData,
  receiptorRelationData,
  countryData,
  educationData,
  nationData,
  residenceTypeData,
  paymentTypeData,
  floatingPriceSubsidyData,
  islandSubsidiesData,
  insuranceCodeNameData,
  yearList,
  receiptorWayData,
  insuredGroup,
  reason,
  injuryIssueMode,
  payType,
  injurySiteData,
  affectedByEpidemic,
  transferAccountType,
  baseRatioDate,
  insuranceTypeDataTwo,
  certTypeFace
}
