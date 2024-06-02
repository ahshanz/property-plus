import connectDB from '@/config/database';
import Message from '@/models/Message';
import { getSessionUser } from '@/utils/getSessionUser';

export const dynamic = 'force-dynamic';

// GET /api/messages/
export const GET = async () => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.user) {
      return new Response(JSON.stringify('User ID is required'), {
        status: 401,
      });
    }

    const { userId } = sessionUser;

    const messages = await Message.find({ recipient: userId })
      .populate('sender', 'username')
      .populate('property', 'name');

    return new Response(JSON.stringify(messages), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify('Somthing sent wrong'), { status: 500 });
  }
};

// POST /api/messages/
export const POST = async (request) => {
  try {
    await connectDB();

    const { name, email, phone, message, property, recipient } =
      await request.json();

    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.user) {
      return new Response(
        JSON.stringify({ message: 'You must be logged in to send messages' }),
        {
          status: 401,
        }
      );
    }

    const { user } = sessionUser;

    // cannot send message to self
    if (user.id === recipient) {
      return new Response(
        JSON.stringify({ message: 'Cannot send a message to yourself' }),
        {
          status: 400,
        }
      );
    }

    const newMessage = new Message({
      sender: user.id,
      recipient,
      property,
      name,
      email,
      phone,
      body: message,
    });
    newMessage.save();

    return new Response(JSON.stringify({ message: 'Message Sent' }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify('Somthing sent wrong'), { status: 500 });
  }
};