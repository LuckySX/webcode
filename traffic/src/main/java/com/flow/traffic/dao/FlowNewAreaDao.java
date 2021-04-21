package com.flow.traffic.dao;



import com.flow.traffic.entity.AreaStatisticsGraph;
import com.flow.traffic.entity.AreaStatisticsTableIp;
import com.flow.traffic.entity.AreaStatisticsTableWeb;
import com.flow.traffic.entity.QueryCondition;

import java.util.List;

public interface FlowNewAreaDao {
    //按天统计
    //List<AreaStatisticsGraph> selectTareaDay(QueryCondition con);
    //按小时统计
    List<AreaStatisticsGraph> selectTareaHour(QueryCondition con, String index);
    //按照网站查询表格
    List<AreaStatisticsTableWeb> selectBareaForWeb(QueryCondition con);
    //按照网站查询表格数据条数
    long selectBareaForWebnum(QueryCondition con);
    //按照网民查询表格
    List<AreaStatisticsTableIp> selectBareaForIp(QueryCondition con);
    //查询今日表中最大时间
    String selectMaxTime(QueryCondition con);
}
