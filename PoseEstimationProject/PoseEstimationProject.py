import cv2
import time
import PoseModule as pm
from pynput.keyboard import Key, Controller

myKeyboard = Controller()

x_size, y_size = 720, 480
cap = cv2.VideoCapture(0)
# pTime = 0
detector = pm.poseDetector()

x_ratio = 0.2
y_ratio = 0.2

x_lowerbound = x_size * x_ratio
x_upperbound = x_size - x_lowerbound

y_lowerbound = y_size * y_ratio
y_upperbound = y_size - y_lowerbound

delay = 150

while delay>0:
    success, img = cap.read()
    img = cv2.resize(img, (x_size, y_size))
    cv2.putText(img, str((delay//30)+1), (int(x_size*0.4), int(y_size*0.5)), cv2.FONT_HERSHEY_DUPLEX, 5, (127, 255, 255), 2)
    delay -= 1
    cv2.imshow("Image", img)
    cv2.waitKey(1)

while True:
    success, img = cap.read()
    img = cv2.resize(img, (x_size, y_size))
    img = detector.findPose(img)
    lmList = detector.findPosition(img, draw=False)

    cv2.line(img, (int(0), int(y_upperbound)), (int(x_size), int(y_upperbound)), (255, 0, 0), 5)
    cv2.line(img, (int(0), int(y_lowerbound)), (int(x_size), int(y_lowerbound)), (255, 0, 0), 5)
    cv2.line(img, (int(x_lowerbound), int(0)), (int(x_lowerbound), int(y_size)), (255, 0, 0), 5)
    cv2.line(img, (int(x_upperbound), int(0)), (int(x_upperbound), int(y_size)), (255, 0, 0), 5)

    if len(lmList) != 0:
        cv2.circle(img, (lmList[20][1], lmList[20][2]), 15, (0, 0, 255), cv2.FILLED)
        shoulder1_y, shoulder2_y = lmList[11][2], lmList[12][2]

        right_hand_x = lmList[20][1]
        left_hand_x = lmList[19][1]

        right_hand_y = lmList[20][2]
        left_hand_y = lmList[19][2]

        if(right_hand_x < x_lowerbound and left_hand_x > x_upperbound):
            myKeyboard.tap('e')
            print("Hi!")
        elif(right_hand_y < y_lowerbound and left_hand_y < y_lowerbound):
            myKeyboard.tap('q')
            print("Jump!")
        elif((right_hand_y < y_lowerbound and y_lowerbound < left_hand_y < y_upperbound) or (left_hand_y < y_lowerbound and y_lowerbound < right_hand_y < y_upperbound)):
            myKeyboard.press('w')
            print("Up!")
        elif((right_hand_y > y_upperbound and y_lowerbound < left_hand_y < y_upperbound) or (left_hand_y > y_upperbound and y_lowerbound < right_hand_y < y_upperbound)):
            myKeyboard.press('s')
            print("Down!")
        elif(right_hand_y > y_upperbound and left_hand_y > y_upperbound):
            myKeyboard.release('e')
            myKeyboard.release('q')
            myKeyboard.release('w')
            myKeyboard.release('a')
            myKeyboard.release('s')
            myKeyboard.release('d')
        elif(x_lowerbound < right_hand_x < x_upperbound and left_hand_x > x_upperbound):
            myKeyboard.press('a')
            print("Left!")
        elif(right_hand_x < x_lowerbound and x_lowerbound < left_hand_x < x_upperbound):
            myKeyboard.press('d')
            print("Right!")
        else:
            myKeyboard.release('e')
            myKeyboard.release('q')
            myKeyboard.release('w')
            myKeyboard.release('a')
            myKeyboard.release('s')
            myKeyboard.release('d')

        cv2.imshow("Image", img)
    cv2.waitKey(1)