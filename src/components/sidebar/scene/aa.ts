type Vehicle = {
    id: string,
    year: number,
};
type Driver = {
    id: string,
    principalVehicleID: ?string, // This maybe null if data is not available.
    age: number,
};




{
    // Maps each vehicle ID to corresponding principal driver ID
    vehicles: { vehID1: drvID1, ... },
    // Maps each driver ID to corresponding principal vehicle ID
    drivers: { drvID1: vehID1, ... },
}

// 车辆 array 

// 驾驶员 array 

[{
    id: 'a_car',
    year: 6
}, {
    id: 'b_car',
    year: 7
}];

[{
    id: 'shixy',
    principalVehicleID: 'a_car',
    age: 13,
}, {
    id: 'xujian',
    principalVehicle: 'b_car',
    age: 15
}];
// 提取出所有已分配的主要车辆id,
// 进行对比，找出未分配的车辆，同时去除已分配的人。
// 这时得到未分配的车辆、 和未分配的人
// 将未分配的车辆按照时间进行降序排列
// 将未分配的人进行升序排列
// 两个for循环，进行分配。
// 使用一个object进行保存这些结果。
// 处理object。合并到最终的结果。

// 2辆车，四个驾驶员，都没有分配过。
// 每辆车需要有一个主驾驶员，和多个副驾驶员
// 每个驾驶员可以有多辆车。
// 车 =>

// 遍历车，第一个匹配的作为主驾驶员，其次作为副驾驶员。 =>
// 

// x车，y车
// a,b,c,d 

// x车匹配到了a，这时x车的主驾驶员分配完成
// y车继续匹配b，这时y车的主驾驶员分配完成
// 剔除出去，已分配的a和b，此时还剩下 c , d。

// a,b,c,d 四辆车
// x，y两个人。