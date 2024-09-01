import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CheckinScreen = () => {
  const [task, setTask] = useState([]);
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [newTaskTitle, setNewTaskTitle] = useState('');

  // ฟังก์ชั่นเพิ่มงาน
  const addTask = () => {
    if (newTaskTitle.trim() === '' && newTaskDescription.trim() === '') {
      // กรณีที่ไม่ได้กรอกเวลาและรายละเอียด
      alert('กรุณากรอกรายละเอียดของงาน');
      return;
    }
    const taskColor = ['#F7C43C', '#ED6E0F', '#6CAC48', '#78CBE5', '#FEA57B'];
    const newTask = {
      id: (task.length + 1).toString(),
      time: new Date().toLocaleDateString('th-TH'),
      title: newTaskTitle,
      description: newTaskDescription,
      color: taskColor[Math.floor(Math.random() * taskColor.length)], // คุณสามารถตั้งค่าสีใหม่ได้ที่นี่
    };

    setTask([...task, newTask]);
    setNewTaskDescription('');
    setNewTaskTitle('');
  };

  // ฟังก์ชั่นลบงาน
  const removeTask = (id) => {
    setTask(task.filter((task) => task.id !== id));
  };

  // ฟังก์ชั่นเพิ่มงานใหม่
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.dateTimeContainer}>
        <CalendarComponent />
      </View>
      <View style={styles.container}>
        <Text style={styles.taskTitle}>รายการ</Text>
        <FlatList
          data={task}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.taskItem, { backgroundColor: item.color }]}>
              <View style={styles.textWrap}>
                <Text style={styles.taskTitleTxt}>{item.title}</Text>
                <Text style={styles.taskTime}>{item.time}</Text>
                <Text style={styles.taskDesciption}>{item.description}</Text>
              </View>
              <View style={styles.btnTrashIcon}>
                <TouchableOpacity
                  style={styles.taskButton}
                  onPress={() => removeTask(item.id)}>
                  <Ionicons name="trash-outline" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
        <View style={styles.addTaskContainer}>
          <View>
            <Text>หัวข้อ</Text>
            <TextInput
              style={styles.input}
              value={newTaskTitle}
              onChangeText={setNewTaskTitle}
            />
            <Text>รายละเอียด</Text>
            <TextInput
              style={styles.input}
              value={newTaskDescription}
              onChangeText={setNewTaskDescription}
            />
          </View>
          <TouchableOpacity style={styles.addButton} onPress={addTask}>
            <Text style={styles.addButtonText}>เพิ่ม</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// ฟังก์ชั่นเพื่อคำนวณวันที่ในสัปดาห์ปัจจุบัน
const getCurrentWeekDates = () => {
  const current = new Date();
  const weekStart = current.getDate() - current.getDay(); // หาวันเริ่มต้นของสัปดาห์
  const weekDates = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(current.setDate(weekStart + i));
    weekDates.push(date.getDate());
  }

  return weekDates;
};

const CalendarComponent = () => {
  const d = new Date();
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const dates = getCurrentWeekDates();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateTitle = d.toLocaleDateString('th-TH', options);
  const dateNow = d.getDate();

  return (
    <View>
      <Text style={styles.dateMonthYearTitle}>{dateTitle}</Text>
      <View style={styles.weekContainer}>
        {daysOfWeek.map((day, index) => (
          <View key={index} style={styles.dayContainer}>
            <Text style={styles.setDayOfWeek}>{day}</Text>
            <Text style={dates[index] === dateNow ? styles.setFocusDate : styles.setDate}>
              {dates[index]}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  setDayOfWeek: {
    color: '#fff',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  taskItem: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 15,
    marginTop: 10,
  },
  setFocusDate: {
    padding: 10,
    backgroundColor: 'yellow',
    marginTop: 10,
    borderRadius: 12,
  },
  setDate: {
    padding: 10,
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 12,
  },
  dateTimeContainer: {
    backgroundColor: '#5B4FB1',
    padding: 10,
  },
  btnTrashIcon: {
    justifyContent: 'center',
  },
  textWrap: {
    width: '85%',
  },
  taskTime: {
    fontSize: 12,
    marginRight: 10,
  },
  taskTitleTxt: {
    fontWeight: 'bold',
  },
  taskDesciption: {
    marginTop: 10,
    fontSize: 14,
    flex: 1,
  },
  taskButton: {
    padding: 10,
  },
  addTaskContainer: {
    flexDirection: 'column',
    marginTop: 20,
  },
  dateMonthYearTitle: {
    textAlign: 'center',
    color: 'white',
  },
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  dayContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#ff5252',
    padding: 10,
    borderRadius: 10,
  },
  addButtonText: {
    textAlign: 'center',
    color: '#fff',
  },
  taskTitle: {
    fontWeight: 'bold',
  },
});

export default CheckinScreen;
