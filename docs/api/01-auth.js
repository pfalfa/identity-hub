/**
 * @swagger
 * tags:
 *  - name: Authorization
 *    description: Rest API of user authorization (login, register).
 * paths:
 *  /api/auth/register:
 *    post:
 *      tags:
 *        - Authorization
 *      summary: Register new user
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/definitions/PayloadRegister'
 *      responses:
 *        200:
 *          description: Response Success.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/ResponseSuccessRegister'
 *        400:
 *          description: Response Bad request.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/ResponseBadRequest'
 *  /api/v1/payment/detail:
 *    post:
 *      tags:
 *        - Payment
 *      summary: Detail Payment
 *      description: Get Detail by transaction ID and PubKey
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/definitions/PayloadDetailPayment'
 *      responses:
 *        200:
 *          description: Charge Success.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/SuccessGetDetailPayment'
 *        400:
 *          description: Bad request. Charge Error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/BadRequest'
 *  /api/v1/payment/all?pubKey=ONKEY.ttd6Bu4ODhNaiUV&page=1&limit=10:
 *    get:
 *      tags:
 *        - Payment
 *      summary: List Payment
 *      description: Get all your data.
 *      responses:
 *        200:
 *          description: User found and logged in successfully.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/SuccessRequestList'
 *        400:
 *          description: Bad request. Password and email not match.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/definitions/BadRequest'
 * 
 * definitions:
 *  PayloadRegister:
 *    properties:
 *      email:
 *        type: string
 *        example: user@email.com
 *      passphare:
 *        type: string
 *        example: P@ssw0rd
 *      hint:
 *        type: string
 *        example: Sebuah Kata Hint
 *  ResponseSuccessRegister:
 *    properties:
 *      success:
 *        type: boolean
 *        example: true
 *      message:
 *        type: string
 *        example: User created successfully
 *      data:
 *        type: object
 *        properties:
 *          pub:
 *            type: string
 *            example: 3dSC18IJNY2BiAKjoST5GUukiLmfAm8LYNgHkANQKXQ.81IFAqp3pJTlBKdPg1kbSqoqIXnbrk7C7vGjN3ozY_A
 *          epub:
 *            type: string
 *            example: w3O9QMv3CRHPXH_znH2s1YpUjNLoC3cS25ilaqX8CJM.EJR4LBQUxqpq3D9SPPkSzkVEk3wZIfQd0PEoFLDGONE
 *          priv:
 *            type: string
 *            example: KL6fov_S4Tz2BG4p5FgPjUwIaKG_6rVZVFuHOUivuww
 *          epriv:
 *            type: string
 *            example: g0foq9F44FtvHHwopa1W-Mn80umJzgFB1uugzw9ZZDs
 *          profile:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                format: email
 *                example: user@email.com
 *              hint:
 *                type: string
 *                example: Sebuah Kata Hint
 * 
 *  PayloadDetailPayment:
 *   properties:
 *      transaction_id:
 *        type: string
 *        example: ONHYTYL.VA.1575710116jNEL
 *      pub_key:
 *        type: string
 *        example: ONKEY.ttd6Bu4ODhNaiUV
 *  PayloadCharge:
 *    properties:
 *      pub_key:
 *        type: string
 *        example: ONKEY.ttd6Bu4ODhNaiUV
 *      payment_type:
 *        type: string
 *        example: bank_transfer
 *      amount:
 *        type: integer
 *        example: 40000
 *      order_id:
 *        type: string
 *        example: lomudev.0010291
 *      customer_details:
 *        type: object
 *        properties:
 *          email:
 *              type: string
 *              format: email
 *              example: lomudsev@example.com
 *          first_name:
 *              type: string
 *              example: arief
 *          last_name:
 *              type: string
 *              example: trimanda
 *          phone:
 *              type: string
 *              format: phone
 *              example: +628111901404
 *      item_details:
 *        type: array
 *        items:
 *              type: object
 *              properties:
 *                  id:
 *                      type: string
 *                      example: item01
 *                  price:
 *                      type: integer
 *                      example: 20000
 *                  quantity:
 *                      type: integer
 *                      example: 2
 *                  name:
 *                      type: string
 *                      example: Ayam XOXOXO
 *  SuccessGetDetailPayment:
 *    properties:
 *      code:
 *        type: number
 *        example: 200
 *      code_message:
 *        type: string
 *        example: Success
 *      data:
 *        type: object
 *        properties:
 *          amount:
 *              type: integer
 *              example: 40000
 *          bank_name:
 *              type: string
 *              example: bca
 *          currency:
 *              type: string
 *              example: IDR
 *          expired_at:
 *              type: date
 *              example: 2019-12-10T18:09:13.283145485+07:00
 *          order_id:
 *              type: string
 *              example: lomudev.0010292
 *          payment_type:
 *              type: string
 *              example: bank_transfer
 *          transaction_id:
 *              type: string
 *              example: ONHYTYL.VA.1575889753bcPu
 *          status:
 *              type: string
 *              example: pending
 *          va_numbers:
 *              type: string
 *              example: 12365763164059
 *          customer_details:
 *              type: object
 *              properties:
 *                  email:
 *                      type: string
 *                      format: email
 *                      example: lomudsev@example.com
 *                  first_name:
 *                      type: string
 *                      example: arief
 *                  last_name:
 *                      type: string
 *                      example: trimanda
 *                  phone:
 *                      type: string
 *                      format: phone
 *                      example: +628111901404
 *              item_details:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: string
 *                              example: item01
 *                          price:
 *                              type: integer
 *                              example: 20000
 *                          quantity:
 *                              type: integer
 *                              example: 2
 *                          name:
 *                              type: string
 *                              example: Ayam XOXOXO
 *  SuccessRequestCharge:
 *    properties:
 *      code:
 *        type: number
 *        example: 200
 *      code_message:
 *        type: string
 *        example: Success
 *      data:
 *        type: object
 *        properties:
 *          bank_name:
 *              type: string
 *              example: bca
 *          currency:
 *              type: string
 *              example: IDR
 *          expired_at:
 *              type: date
 *              example: 2019-12-10T18:09:13.283145485+07:00
 *          fraud_status:
 *              type: string
 *              example: accept
 *          amount:
 *              type: string
 *              example: 67000.00
 *          order_id:
 *              type: string
 *              example: lomudev.0010292
 *          payment_type:
 *              type: string
 *              example: bank_transfer
 *          transaction_id:
 *              type: string
 *              example: ONHYTYL.VA.1575889753bcPu
 *          status:
 *              type: string
 *              example: pending
 *          va_numbers:
 *              type: string
 *              example: 12365763164059
 *          transaction_time:
 *              type: date
 *              example: 2019-12-10T18:09:13.283145485+07:00
 *          item_details:
 *              type: array
 *              items:
 *                  type: object
 *                  properties:
 *                      id:
 *                          type: string
 *                          example: item01
 *                      price:
 *                          type: integer
 *                          example: 20000
 *                      quantity:
 *                          type: integer
 *                          example: 2
 *                      name:
 *                          type: string
 *                          example: Ayam XOXOXO
 *  SuccessRequestList:
 *    properties:
 *      code:
 *        type: number
 *        example: 200
 *      code_message:
 *        type: string
 *        example: Success
 *      data:
 *        type: array
 *        items:
 *          type: object
 *          properties:
 *              bank_name:
 *                  type: string
 *                  example: bca
 *              amount:
 *                  type: string
 *                  example: 67000.00
 *              order_id:
 *                  type: string
 *                  example: lomudev.0010292
 *              payment_type:
 *                  type: string
 *                  example: bank_transfer
 *              transaction_id:
 *                  type: string
 *                  example: ONHYTYL.VA.1575889753bcPu
 *              status:
 *                  type: string
 *                  example: pending
 *              va_number:
 *                  type: string
 *                  example: 12365763164059
 *              customer_details:
 *                  type: object
 *                  properties:
 *                      email:
 *                          type: string
 *                          format: email
 *                          example: lomudsev@example.com
 *                      first_name:
 *                          type: string
 *                          example: arief
 *                      last_name:
 *                          type: string
 *                          example: trimanda
 *                      phone:
 *                          type: string
 *                          format: phone
 *                          example: +628111901404
 *  BadRequest:
 *    properties:
 *      code:
 *        type: number
 *        example: 400
 *      code_message:
 *        type: string
 *        example: Example bad request message
 *      data:
 *        type: object
 *        example: {}
 *  UnAuthorize:
 *    properties:
 *      code:
 *        type: number
 *        example: 401
 *      code_message:
 *        type: string
 *        example: Authorization not found
 *      data:
 *        type: object
 *        example: {}
 *
 */
