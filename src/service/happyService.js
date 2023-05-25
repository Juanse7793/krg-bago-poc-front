import axios from "axios";

// eslint-disable-next-line no-undef
const BirthdayApiService = 'http://bago-backend-2/api/v1/employees/birthdays';

const getEmployeesBirthdays = async () => {
  try {
    const response = await axios.get(BirthdayApiService);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getEmployeesBirthdays };
