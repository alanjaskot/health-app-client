export enum HealthRoutes {
    HEALTH_DASHBOARD = '/health/dashboard',
    
    // Health - Blood Pressure
    HEALTH_BLOOD_PRESSURE_LIST = 'blood-pressure/list',
    HEALTH_BLOOD_PREESURE_NEW = 'blood-pressure/new',
    HEALTH_BLOOD_PRESSURE_EDIT = 'blood-pressure/:id',
    
    // Health - BMI
    HEALTH_BMI_LIST = 'bmi/list',
    HEALTH_BMI_NEW = 'bmi/new',
    HEALTH_BMI_EDIT = 'bmi/:id',

    // Health - Medicine
    HEALTH_MEDICINE_LIST = 'medicine/list',
    HEALTH_MEDICINE_NEW = 'medicine/new',
    HEALTH_MEDICINE_EDIT = 'medicine/:id',
}