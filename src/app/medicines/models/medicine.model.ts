export interface IMedicineModel {
  id: string;
  name: string;
  dose: number;
  unit: string;
  medicalDosage?: number;
  created?: Date;
  updated?: Date;
}
