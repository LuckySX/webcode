/*
 * @Author: niumiaomiao
 * @Date: 2020-03-22 13:55:25
 * @Description:
 */
import { axisLabelColor, axisLineColor, colorLineGroup, colorBarGrput } from './baseUtils'

/**
 * @Author: shixiao
 * @description: 折线
 * @param {type}
 * @return:
 */
export const lineOption = {
  tooltip: {
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: [5, 10],
    textStyle: {
      color: '#333'
    },
    formatter: (params: any) => {
      return `时间：${params.name}</br>
                      流量值：${params.data.info}`
    }
  },
  grid: {
    left: 10,
    right: '4%',
    bottom: 0,
    top: 30,
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: [],
    axisLabel: {
      color: axisLabelColor
    },
    axisLine: {
      lineStyle: {
        color: axisLineColor,
        opacity: 0.5
      }
    }
  },
  yAxis: {
    type: 'value',
    name: 'KB',
    axisLabel: {
      color: axisLabelColor
    },
    axisLine: {
      lineStyle: {
        color: axisLineColor,
        opacity: 0.5
      }
    },
    splitLine: {
      lineStyle: {
        color: axisLineColor,
        opacity: 0.1
      }
    }
  },
  series: [
    {
      data: [],
      type: 'line',
      itemStyle: {
        color: axisLineColor
      },
      smooth: true
    }
  ]
}

/**
 * @description: 堆叠柱图
 * @param {type}
 * @return:
 * @author: niumiaomiao
 */
export const barStackOption = {
  tooltip: {
    trigger: 'axis',
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: [5, 10],
    textStyle: {
      color: '#333'
    },
    formatter: (data: any) => {
      if (data[0].name !== '无数据') {
        let tip = `${data[0].name}<br>`
        for (let i = 0; i < data.length; i++) {
          tip += `${data[i].seriesName}: ${data[i].value}${data[i].data.unit || ''}<br>`
        }
        return tip
      }
    }
  },
  legend: {
    left: 'center',
    itemWidth: 22,
    itemHeight: 4,
    itemGap: 13,
    data: []
  },
  grid: {
    left: 30,
    right: 30,
    bottom: 0,
    top: 50,
    containLabel: true
  },
  yAxis: {
    name: '流量/GB',
    type: 'value',
    // position: 'left',
    offset: '0',
    axisLabel: {
      color: axisLabelColor
    },
    axisLine: {
      lineStyle: {
        color: axisLineColor,
        opacity: 0.5
      }
    },
    splitLine: {
      lineStyle: {
        color: axisLineColor,
        opacity: 0.1
      }
    },
    axisTick: {
      length: 2
    }
  },
  xAxis: {
    axisLabel: {
      color: axisLabelColor
    },
    axisLine: {
      lineStyle: {
        color: axisLineColor,
        opacity: 0.5
      }
    },
    splitLine: {
      show: false
    },
    axisTick: {
      length: 2
    },
    data: ['无数据']
  },
  series: []
}

export const getBarStackData = function(data: any): any {
  const seriesData: any[] = []
  const legendData: Array<string> = []
  const xAxisData: Array<string> = []
  if (data && data != undefined && data.length > 0) {
    data[0].forEach((i: any) => {
      xAxisData.push(i.name)
    })
    data.forEach((item: any, index: any) => {
      legendData.push(item[0].category)
      seriesData.push({
        name: item[0].category,
        type: 'bar',
        stack: '总量',
        barWidth: '30px',
        color: colorBarGrput[index],
        data: item
      })
    })
  }
  return { legendData, xAxisData, seriesData }
}
/**
 * @description: 堆叠区域图
 * @param {type}
 * @return:
 * @author: fuping
 */
export const areaStackOption = {
  tooltip: {
    trigger: 'axis',
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: [5, 10],
    textStyle: {
      color: '#333'
    },
    formatter: (data: any) => {
      if (data[0].name !== '无数据') {
        let tip = `${data[0].name}<br>`
        for (let i = 0; i < data.length; i++) {
          tip += `${data[i].seriesName}: ${data[i].value}${data[i].data.unit || ''}<br>`
        }
        return tip
      }
    }
  },
  legend: {
    left: 'center',
    itemWidth: 22,
    itemHeight: 4,
    itemGap: 13,
    width: '90%',
    type: 'scroll',
    data: [],
    show: false
  },
  grid: {
    left: 35,
    right: 30,
    bottom: 0,
    top: 30,
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    axisLabel: {
      color: axisLabelColor
    },
    axisLine: {
      lineStyle: {
        color: axisLineColor,
        opacity: 0.5
      }
    },
    splitLine: {
      show: false
    },
    data: ['无数据']
  },
  yAxis: {
    name: '流量/GB',
    type: 'value',
    axisLabel: {
      color: axisLabelColor
    },
    axisLine: {
      lineStyle: {
        color: axisLineColor,
        opacity: 0.5
      }
    },
    splitLine: {
      lineStyle: {
        color: axisLineColor,
        opacity: 0.1
      }
    },
    axisTick: {
      length: 2
    }
  },
  series: []
}

export const getAreaStackData = function(data: any): any {
  const seriesData: any[] = []
  const legendData: Array<string> = []
  const xAxisData: Array<string> = []
  if (data && data != undefined && data.length > 0) {
    data[0].forEach((i: any) => {
      xAxisData.push(i.name)
    })
    data.forEach((item: any, index: any) => {
      legendData.push(item[0].category)
      seriesData.push({
        name: item[0].category,
        type: 'line',
        smooth: true,
        stack: '总量',
        showSymbol: false,
        lineStyle: {
          normal: {
            width: 2
          }
        },
        itemStyle: {
          normal: {
            color: colorLineGroup[index],
            lineStyle: {
              width: 1,
              type: 'solid'
            }
          }
        },
        data: item
      })
    })
  }
  return { legendData, xAxisData, seriesData }
}
