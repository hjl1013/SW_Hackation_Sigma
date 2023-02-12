import { Button } from '@react-email/button'
import { Container } from '@react-email/container'
import { Head } from '@react-email/head'
import { Html } from '@react-email/html'
import { Img } from '@react-email/img'
import { Preview } from '@react-email/preview'
import { Section } from '@react-email/section'
import { Text } from '@react-email/text'

interface Props {
    link: string
}

export default function Password({ link }: Props) {
    return (
        <Html lang='ko'>
            <Head>
                <title>시그마 인텔리전스 커뮤니티 비밀번호 설정 링크</title>
            </Head>
            <Preview>
                시그마 인텔리전스 커뮤니티 비밀번호 설정 링크 보내드립니다.
            </Preview>
            <Section
                style={{
                    textAlign: 'center',
                    padding: '30px 0',
                }}
            >
                <Container
                    style={{
                        border: '1px solid #eaeaea',
                        borderRadius: '5px',
                        margin: '10px auto',
                        padding: '20px',
                        textAlign: 'center',
                    }}
                >
                    <Text
                        style={{
                            color: '#000',
                            fontFamily:
                                "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                            fontSize: '24px',
                            fontWeight: 'normal',
                            textAlign: 'center',
                            marginBottom: '24px',
                        }}
                    >
                        <strong>시그마 인텔리전스</strong> 비밀번호 설정
                    </Text>
                    <Img
                        src={
                            'https://storage.sigma-intelligence.com/open-graph-v1.png'
                        }
                        width={'200px'}
                        style={{ margin: '16px auto 8px' }}
                    />
                    <Button
                        href={link}
                        style={{
                            backgroundColor: '#7b0920',
                            borderRadius: '4px',
                            fontWeight: 'normal',
                            color: '#fff',
                            fontSize: '12px',
                            fontFamily:
                                "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                            textDecoration: 'none',
                            textAlign: 'center',
                            display: 'block',
                            padding: '8px 16px',
                        }}
                    >
                        설정 페이지로 이동
                    </Button>
                </Container>
                <Container style={{ margin: '10px auto' }}>
                    <Text
                        style={{
                            color: '#888',
                            fontFamily:
                                "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                            fontSize: '12px',
                            fontWeight: 'normal',
                            textAlign: 'left',
                            margin: '0',
                        }}
                    >
                        {`\u2022  `}시그마 공식 계정으로부터 온 이메일인지 꼭
                        확인해주세요.
                    </Text>
                    <Text
                        style={{
                            color: '#888',
                            fontFamily:
                                "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                            fontSize: '12px',
                            fontWeight: 'normal',
                            textAlign: 'left',
                            margin: '0',
                        }}
                    >
                        {`\u2022  `}본인이 비밀번호 설정을 요청한 적이 없다면
                        무시해주세요.
                    </Text>
                    <Text
                        style={{
                            color: '#888',
                            fontFamily:
                                "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                            fontSize: '12px',
                            fontWeight: 'normal',
                            textAlign: 'left',
                            margin: '0',
                        }}
                    >
                        {`\u2022  `}비밀번호 설정은 메일을 받은 후 30분까지만
                        유효합니다.
                    </Text>
                </Container>
            </Section>
        </Html>
    )
}
