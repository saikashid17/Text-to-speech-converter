// src/awsPolly.js
import { PollyClient, SynthesizeSpeechCommand } from "@aws-sdk/client-polly";

const pollyClient = new PollyClient({
  region: 'ap-south-1',
  credentials: {
    accessKeyId: //enter your access key id,
    secretAccessKey: //enter your access key,
  },
});

export const synthesizeSpeech = async (text, voice, speed = 1, pitch = 1, volume = 1) => {
  const formattedSpeed = `${speed * 100}%`;
  const formattedPitch = `${(pitch - 1) * 50}%`;
  const formattedVolume = `${(volume - 1) * 10}dB`;

  const ssml = `<speak><prosody rate="${formattedSpeed}" pitch="${formattedPitch}" volume="${formattedVolume}">${text}</prosody></speak>`;

  const command = new SynthesizeSpeechCommand({
    OutputFormat: "mp3",
    Text: ssml,
    TextType: "ssml",
    VoiceId: voice,
  });

  const response = await pollyClient.send(command);

  const audioChunks = [];
  for await (const chunk of response.AudioStream) {
    audioChunks.push(chunk);
  }

  return new Blob(audioChunks, { type: 'audio/mp3' });
};

