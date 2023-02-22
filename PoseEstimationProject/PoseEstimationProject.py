import cv2
import time
import PoseModule as pm
from pynput.keyboard import Key, Controller

myKeyboard = Controller()

x_size, y_size = 720, 480
cap = cv2.VideoCapture(0)
# pTime = 0
detector = pm.poseDetector()
jump_threshold = y_size*0.35
duck_threshold = y_size*0.6

delay = 150

while delay>0:
    success, img = cap.read()
    img = cv2.resize(img, (x_size, y_size))
    cv2.putText(img, str((delay//30)+1), (int(x_size*0.5), int(x_size*0.5)), cv2.FONT_HERSHEY_COMPLEX, 5, (0, 0, 255), 2)
    delay -= 1
    cv2.imshow("Image", img)
    cv2.waitKey(1)

while True:
    success, img = cap.read()
    img = cv2.resize(img, (x_size, y_size))
    img = detector.findPose(img)
    lmList = detector.findPosition(img, draw=False)
    # cv2.rectangle(img, (0, 0), (x_size, int(jump_threshold)), (0, 200, 0), cv2.FILLED)
    # cv2.rectangle(img, (0, int(duck_threshold)), (x_size, y_size), (0, 200, 0), cv2.FILLED)
    cv2.line(img, (int(x_size * 0.4), int(jump_threshold)), (int(x_size * 0.6), int(jump_threshold)), (255, 0, 0), 5)
    cv2.line(img, (int(x_size*0.4), int(y_size*0.4)), (int(x_size*0.6), int(y_size*0.4)), (255, 0, 0), 5)
    cv2.line(img, (int(x_size * 0.4), int(duck_threshold)), (int(x_size * 0.6), int(duck_threshold)), (255, 0, 0), 5)
    cv2.putText(img, "JUMP", (int(x_size * 0.6) + 10, int(jump_threshold)), cv2.FONT_HERSHEY_COMPLEX, 0.5, (255, 0, 0), 2)
    cv2.putText(img, "READY", (int(x_size * 0.6) + 10, int(y_size*0.4)), cv2.FONT_HERSHEY_COMPLEX, 0.5, (255, 0, 0), 2)
    cv2.putText(img, "DUCK", (int(x_size * 0.6) + 10, int(duck_threshold)), cv2.FONT_HERSHEY_COMPLEX, 0.5, (255, 0, 0), 2)

    if len(lmList) != 0:
        cv2.circle(img, (lmList[20][1], lmList[20][2]), 15, (0, 0, 255), cv2.FILLED)
        shoulder1_y, shoulder2_y = lmList[11][2], lmList[12][2]
        # hand = lmList[20][2]

        right_hand = lmList[19][2]
        left_hand = lmList[20][2]

        # print(shoulder1_y, shoulder2_y)

        # if shoulder1_y < jump_threshold and shoulder2_y < jump_threshold:
        # if hand < jump_threshold:
        #     # myKeyboard.press(Key.space)
        #     print("JUMPED!")
        # else:
        #     pass
        #     # myKeyboard.release(Key.space)
        # # if shoulder1_y > duck_threshold and shoulder2_y > duck_threshold:
        # if hand > duck_threshold:
        #     # myKeyboard.press(Key.down)
        #     print("DUCKED!")
        # else:
        #     pass
        #     # myKeyboard.release(Key.down)

        if right_hand < jump_threshold:
            myKeyboard.press('a')
            myKeyboard.press('s')
            print("Left!")
        elif left_hand < jump_threshold:
            myKeyboard.press('w')
            myKeyboard.press('d')
            print("Right!")
        else:
            myKeyboard.release('w')
            myKeyboard.release('a')
            myKeyboard.release('s')
            myKeyboard.release('d')

        cv2.imshow("Image", img)
    cv2.waitKey(1)